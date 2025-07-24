class RuterDiscountCalculator {
  constructor() {
    this.maxDiscount = 40; // Maximum discount percentage

    // Zone-based single ticket prices (NOK)
    this.zonePrices = {
      1: 44, // Zone 1 only
      2: 72, // Zones 1-2
      3: 101, // Zones 1-3
      4: 129, // Zones 1-4
      all: 157, // All zones
    };

    // Zone-based period ticket prices (NOK) - Updated with correct Ruter prices
    this.periodTickets = {
      1: {
        day: { price: 132, name: "24-hour ticket", days: 1 },
        week: { price: 366, name: "7-day ticket", days: 7 },
        month: { price: 778, name: "30-day ticket", days: 30 },
        year: { price: 7780, name: "Annual ticket", days: 365 },
      },
      2: {
        day: { price: 218, name: "24-hour ticket", days: 1 },
        week: { price: 640, name: "7-day ticket", days: 7 },
        month: { price: 1745, name: "30-day ticket", days: 30 },
        year: { price: 17450, name: "Annual ticket", days: 365 },
      },
      3: {
        day: { price: 303, name: "24-hour ticket", days: 1 },
        week: { price: 887, name: "7-day ticket", days: 7 },
        month: { price: 2510, name: "30-day ticket", days: 30 },
        year: { price: 25100, name: "Annual ticket", days: 365 },
      },
      4: {
        day: { price: 303, name: "24-hour ticket", days: 1 },
        week: { price: 887, name: "7-day ticket", days: 7 },
        month: { price: 2510, name: "30-day ticket", days: 30 },
        year: { price: 25100, name: "Annual ticket", days: 365 },
      },
      all: {
        day: { price: 303, name: "24-hour ticket", days: 1 },
        week: { price: 887, name: "7-day ticket", days: 7 },
        month: { price: 2510, name: "30-day ticket", days: 30 },
        year: { price: 25100, name: "Annual ticket", days: 365 },
      },
    };

    this.init();
  }

  init() {
    const calculateBtn = document.getElementById("calculate-btn");
    const tripsInput = document.getElementById("trips-per-week");
    const periodSelect = document.getElementById("calculation-period");
    const zoneSelect = document.getElementById("zone-selection");
    const currentDiscountSelect = document.getElementById("current-discount");

    calculateBtn.addEventListener("click", () => this.calculate());

    // Calculate on input change for better UX
    tripsInput.addEventListener("input", () => this.calculate());
    periodSelect.addEventListener("change", () => this.calculate());
    zoneSelect.addEventListener("change", () => this.calculate());
    currentDiscountSelect.addEventListener("change", () => this.calculate());

    // Initial calculation
    this.calculate();
  }

  getDiscountPercentage(ticketNumber) {
    if (ticketNumber <= 4) return 0;
    if (ticketNumber <= 9) return 5;
    if (ticketNumber <= 14) return 10;
    if (ticketNumber <= 19) return 15;
    if (ticketNumber <= 24) return 20;
    if (ticketNumber <= 29) return 25;
    if (ticketNumber <= 34) return 30;
    if (ticketNumber <= 39) return 35;
    return 40; // Maximum discount
  }

  getCurrentTicketCount(discountPercentage) {
    // Convert current discount percentage to approximate ticket count
    switch (discountPercentage) {
      case 0:
        return 0;
      case 5:
        return 5;
      case 10:
        return 10;
      case 15:
        return 15;
      case 20:
        return 20;
      case 25:
        return 25;
      case 30:
        return 30;
      case 35:
        return 35;
      case 40:
        return 40;
      default:
        return 0;
    }
  }

  calculateDiscountBreakdown(
    totalTickets,
    ticketPrice,
    currentTicketCount = 0
  ) {
    const breakdown = [];
    let ticketsProcessed = 0;

    while (ticketsProcessed < totalTickets) {
      const absoluteTicketNumber = currentTicketCount + ticketsProcessed + 1;
      const discount = this.getDiscountPercentage(absoluteTicketNumber);

      // Find how many tickets at this discount level
      let ticketsAtThisDiscount = 1;
      let nextTicketNumber = absoluteTicketNumber + 1;

      while (
        ticketsProcessed + ticketsAtThisDiscount < totalTickets &&
        this.getDiscountPercentage(nextTicketNumber) === discount
      ) {
        ticketsAtThisDiscount++;
        nextTicketNumber++;
      }

      const tierStart = ticketsProcessed + 1;
      const tierEnd = ticketsProcessed + ticketsAtThisDiscount;

      breakdown.push({
        range: `${tierStart}-${tierEnd}`,
        tickets: ticketsAtThisDiscount,
        discount: discount,
        pricePerTicket: ticketPrice * (1 - discount / 100),
        totalCost: ticketsAtThisDiscount * ticketPrice * (1 - discount / 100),
        absoluteRange: `${absoluteTicketNumber}-${
          absoluteTicketNumber + ticketsAtThisDiscount - 1
        }`,
      });

      ticketsProcessed += ticketsAtThisDiscount;
    }

    return breakdown;
  }

  calculate() {
    const tripsPerWeek =
      parseInt(document.getElementById("trips-per-week").value) || 0;
    const period = parseInt(
      document.getElementById("calculation-period").value
    );
    const selectedZone = document.getElementById("zone-selection").value;
    const currentDiscount = parseInt(
      document.getElementById("current-discount").value
    );

    // Get zone-specific ticket price and current ticket count
    const ticketPrice = this.zonePrices[selectedZone];
    const currentTicketCount = this.getCurrentTicketCount(currentDiscount);

    // Calculate total trips for the period
    const weeksInPeriod = period / 7;
    const totalTrips = Math.round(tripsPerWeek * weeksInPeriod);

    if (totalTrips === 0) {
      this.displayResults({
        totalTrips: 0,
        totalCost: 0,
        totalSavings: 0,
        averageDiscount: 0,
        breakdown: [],
        selectedZone,
        currentDiscount,
        currentTicketCount,
      });
      this.displayComparison([], 0, period);
      this.displayBreakEvenAnalysis(selectedZone, currentTicketCount, period);
      return;
    }

    // Calculate breakdown starting from current discount level
    const breakdown = this.calculateDiscountBreakdown(
      totalTrips,
      ticketPrice,
      currentTicketCount
    );

    // Calculate totals
    const totalCost = breakdown.reduce((sum, tier) => sum + tier.totalCost, 0);
    const originalCost = totalTrips * ticketPrice;
    const totalSavings = originalCost - totalCost;
    const averageDiscount = (totalSavings / originalCost) * 100;

    const periodComparison = this.calculatePeriodTicketComparison(
      totalTrips,
      totalCost,
      period,
      selectedZone
    );

    this.displayResults({
      totalTrips,
      totalCost,
      totalSavings,
      averageDiscount,
      breakdown,
      originalCost,
      period,
      selectedZone,
      currentDiscount,
      currentTicketCount,
    });

    this.displayComparison(periodComparison, totalCost, period);
    this.displayBreakEvenAnalysis(selectedZone, currentTicketCount, period);
  }

  calculatePeriodTicketComparison(totalTrips, reisCost, period, selectedZone) {
    const comparisons = [];
    const zonePeriodTickets = this.periodTickets[selectedZone];

    // Calculate relevant period tickets based on the calculation period
    const relevantTickets = [];

    if (period === 1) {
      relevantTickets.push("day");
    } else if (period <= 7) {
      relevantTickets.push("day", "week");
    } else if (period <= 30) {
      relevantTickets.push("week", "month");
    } else if (period <= 365) {
      relevantTickets.push("month", "year");
    } else {
      relevantTickets.push("year");
    }

    relevantTickets.forEach((ticketType) => {
      const ticket = zonePeriodTickets[ticketType];
      const ticketsNeeded = Math.ceil(period / ticket.days);
      const totalCost = ticketsNeeded * ticket.price;
      const costPerTrip = totalTrips > 0 ? totalCost / totalTrips : 0;
      const savings = reisCost - totalCost;

      comparisons.push({
        type: ticketType,
        name: ticket.name,
        totalCost,
        costPerTrip,
        savings,
        ticketsNeeded,
        isRecommended: totalCost < reisCost && savings > 50, // Recommend if saves more than 50 NOK
      });
    });

    // Always include Reis option for comparison
    comparisons.push({
      type: "reis",
      name: "Reis (single tickets with discount)",
      totalCost: reisCost,
      costPerTrip: totalTrips > 0 ? reisCost / totalTrips : 0,
      savings: 0,
      ticketsNeeded: totalTrips,
      isRecommended: comparisons.every((c) => c.totalCost >= reisCost),
    });

    return comparisons.sort((a, b) => a.totalCost - b.totalCost);
  }

  displayResults(data) {
    const resultsSection = document.getElementById("results");

    if (data.totalTrips === 0) {
      resultsSection.innerHTML =
        "<p>Enter the number of trips to see your potential discount.</p>";
      return;
    }

    const periodText = this.getPeriodText(data.period);
    const zoneText = this.getZoneText(data.selectedZone);

    resultsSection.innerHTML = `
            <div class="result-card">
                <h3>Your Reis Discount Summary</h3>
                <p><strong>Zone:</strong> ${zoneText}</p>
                <p><strong>Current discount level:</strong> ${
                  data.currentDiscount
                }%</p>
                <p><strong>Trips per ${periodText}:</strong> ${
      data.totalTrips
    }</p>
                <p><strong>Original cost:</strong> ${data.originalCost.toFixed(
                  0
                )} NOK</p>
                <p><strong>Cost with Reis discount:</strong> ${data.totalCost.toFixed(
                  0
                )} NOK</p>
                <p><strong>Average discount:</strong> ${data.averageDiscount.toFixed(
                  1
                )}%</p>

                ${
                  data.totalSavings > 0
                    ? `
                    <div class="savings-highlight">
                        <div>You save</div>
                        <div class="amount">${data.totalSavings.toFixed(
                          0
                        )} NOK</div>
                        <div>per ${periodText}</div>
                    </div>
                `
                    : ""
                }
            </div>

            <div class="result-card">
                <h3>Tips</h3>
                <ul>
                    ${
                      data.currentDiscount < 40 &&
                      data.averageDiscount > data.currentDiscount
                        ? "<li>📈 Your discount will increase as you buy more tickets this period!</li>"
                        : data.averageDiscount < 10
                        ? "<li>💡 Consider increasing your trips to reach higher discount tiers</li>"
                        : "<li>✅ Great! You're getting good discounts with Reis</li>"
                    }
                    <li>🎫 Reis discounts are automatically applied in the Ruter app to single ticket</li>
                    <li>📅 Reis is based on tickets bought in the last 30 days</li>
                    ${"<li>🔄 Your Reis discount level will reset if you don't buy tickets for 30 days</li>"}
                    ${"<li>⚠️ Remember: actual discounts depend on your 30-day rolling usage</li>"}
                </ul>
            </div>
        `;
  }

  displayComparison(comparisons, reisCost, period) {
    const comparisonSection = document.getElementById("comparison");

    if (comparisons.length === 0) {
      comparisonSection.innerHTML = "";
      return;
    }

    const periodText = this.getPeriodText(period);

    comparisonSection.innerHTML = `
            <h3>💰 Ticket Comparison for ${periodText}</h3>
            <p>Here's how different ticket options compare for your usage:</p>

            <div class="comparison-grid">
                ${comparisons
                  .map(
                    (option) => `
                    <div class="ticket-option ${
                      option.isRecommended ? "recommended" : ""
                    }">
                        <h4>${option.name}</h4>
                        <div class="price-display">${option.totalCost.toFixed(
                          0
                        )} NOK</div>
                        <div class="price-per-trip">${option.costPerTrip.toFixed(
                          1
                        )} NOK per trip</div>
                        ${
                          option.savings > 0
                            ? `<div class="savings-badge">Save ${option.savings.toFixed(
                                0
                              )} NOK</div>`
                            : option.savings < 0
                            ? `<div style="color: #dc3545; font-size: 0.9rem;">+${Math.abs(
                                option.savings
                              ).toFixed(0)} NOK more</div>`
                            : ""
                        }
                        ${
                          option.type !== "reis" && option.ticketsNeeded > 1
                            ? `<div style="color: #666; font-size: 0.8rem; margin-top: 0.5rem;">${option.ticketsNeeded} tickets needed</div>`
                            : ""
                        }
                    </div>
                `
                  )
                  .join("")}
            </div>

            <div style="margin-top: 1.5rem; padding: 1rem; background: #e3f2fd; border-radius: 6px;">
                <strong>💡 Recommendation:</strong>
                ${this.getRecommendationText(comparisons)}
            </div>
        `;
  }

  getZoneText(zone) {
    const zoneMap = {
      1: "Zone 1 (Oslo city center)",
      2: "Zones 1-2 (Oslo + inner suburbs)",
      3: "Zones 1-3 (Oslo + outer suburbs)",
      4: "Zones 1-4 (Oslo + extended area)",
      all: "All zones (Oslo + Akershus)",
    };
    return zoneMap[zone] || "Unknown zone";
  }

  getPeriodText(period) {
    switch (period) {
      case 1:
        return "day";
      case 7:
        return "week";
      case 30:
        return "month";
      case 365:
        return "year";
      default:
        return `${period} days`;
    }
  }

  getRecommendationText(comparisons) {
    const recommended = comparisons.find((c) => c.isRecommended);
    const cheapest = comparisons[0]; // Already sorted by cost

    if (recommended) {
      if (recommended.type === "reis") {
        return "Stick with Reis single tickets - you're getting good discounts for your usage pattern!";
      } else {
        return `Consider buying a ${
          recommended.name
        } to save ${recommended.savings.toFixed(
          0
        )} NOK compared to single tickets.`;
      }
    } else if (cheapest.type === "reis") {
      return "Reis single tickets with discounts are your best option for this usage pattern.";
    } else {
      return `A ${cheapest.name} would be cheapest, but the savings might not justify the upfront cost.`;
    }
  }

  calculateBreakEvenPoint(
    periodTicketPrice,
    periodDays,
    ticketPrice,
    currentTicketCount
  ) {
    // Find the break-even point where Reis total cost equals period ticket cost
    let trips = 1;
    let totalCost = 0;

    while (trips <= 200) {
      // Reasonable upper limit
      const breakdown = this.calculateDiscountBreakdown(
        trips,
        ticketPrice,
        currentTicketCount
      );
      totalCost = breakdown.reduce((sum, tier) => sum + tier.totalCost, 0);

      if (totalCost >= periodTicketPrice) {
        return trips;
      }
      trips++;
    }

    return null; // Period ticket is always cheaper
  }

  displayBreakEvenAnalysis(selectedZone, currentTicketCount, period) {
    const breakEvenSection = document.getElementById("break-even");
    if (!breakEvenSection) return;

    const ticketPrice = this.zonePrices[selectedZone];
    const zonePeriodTickets = this.periodTickets[selectedZone];
    const analyses = [];

    // Calculate break-even for relevant period tickets
    const relevantTickets = [];
    if (period === 1) {
      relevantTickets.push("day");
    } else if (period <= 7) {
      relevantTickets.push("day", "week");
    } else if (period <= 30) {
      relevantTickets.push("week", "month");
    } else if (period <= 365) {
      relevantTickets.push("month", "year");
    } else {
      relevantTickets.push("year");
    }

    relevantTickets.forEach((ticketType) => {
      const ticket = zonePeriodTickets[ticketType];
      const breakEvenTrips = this.calculateBreakEvenPoint(
        ticket.price,
        ticket.days,
        ticketPrice,
        currentTicketCount
      );

      if (breakEvenTrips) {
        analyses.push({
          name: ticket.name,
          price: ticket.price,
          breakEvenTrips,
          days: ticket.days,
        });
      }
    });

    if (analyses.length === 0) {
      breakEvenSection.innerHTML = "";
      return;
    }

    breakEvenSection.innerHTML = `
            <h3>📊 Break-Even Analysis</h3>
            <p>Here's how many trips you need before period tickets become more expensive than Reis:</p>

            <div class="break-even-grid">
                ${analyses
                  .map(
                    (analysis) => `
                    <div class="break-even-card">
                        <h4>${analysis.name}</h4>
                        <div class="break-even-number">${
                          analysis.breakEvenTrips
                        }</div>
                        <div class="break-even-label">trips</div>
                        <div class="break-even-details">
                            <small>After ${
                              analysis.breakEvenTrips
                            } trips, Reis (${(
                      analysis.price / analysis.breakEvenTrips
                    ).toFixed(0)} NOK/trip) costs more than a ${
                      analysis.name
                    } (${analysis.price} NOK)</small>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>

            <div class="break-even-tip">
                <strong>💡 How to use this:</strong> If you plan to make more trips than the break-even point within the period ticket's validity, consider buying that period ticket instead of individual Reis tickets.
            </div>
        `;
  }
}

// Initialize the calculator when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new RuterDiscountCalculator();
});
