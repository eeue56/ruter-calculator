class RuterDiscountCalculator {
  constructor() {
    this.maxDiscount = 40; // Maximum discount percentage
    this.currentLanguage = "en";

    // Translation data
    this.translations = {
      en: {
        title: "Ruter Reis Discount Calculator",
        subtitle:
          "Find out what discount you can get on Oslo public transport tickets",
        tripsPerWeek: "How many trips do you expect per week?",
        zoneSelection: "How many zones do you travel through?",
        currentDiscount: "What's your current Reis discount level?",
        calculationPeriod: "Calculate for:",
        calculateBtn: "Calculate Discount",
        // Zone options
        zone1: "1 zone (Oslo city center)",
        zone2: "2 zones",
        zone3: "3 zones",
        zone4: "4 zones",
        zoneAll: "All zones (Oslo + Akershus)",
        // Current discount options
        discount0: "0% - I'm starting fresh (first 4 tickets)",
        discount5: "5% - I've bought 5-9 tickets recently",
        discount10: "10% - I've bought 10-14 tickets recently",
        discount15: "15% - I've bought 15-19 tickets recently",
        discount20: "20% - I've bought 20-24 tickets recently",
        discount25: "25% - I've bought 25-29 tickets recently",
        discount30: "30% - I've bought 30-34 tickets recently",
        discount35: "35% - I've bought 35-39 tickets recently",
        discount40: "40% - I have maximum discount (40+ tickets recently)",
        // Period options
        period1: "24 hours (1 day)",
        period7: "7 days (1 week)",
        period30: "30 days (1 month)",
        period365: "365 days (1 year)",
        // Info section
        howReisWorks: "How Reis Discounts Work:",
        discountTier1: "First 4 tickets: 0% discount",
        discountTier2: "Tickets 5-9: 5% discount",
        discountTier3: "Tickets 10-14: 10% discount",
        discountTier4: "Tickets 15-19: 15% discount",
        discountTier5: "And so on... up to 40% maximum discount",
        disclaimer1:
          "* Discounts are calculated based on tickets purchased in the last 30 days",
        disclaimer2: "* Period ticket prices are approximate and may vary",
        sources: "Sources:",
        sourcesDisclaimer:
          "Pricing and discount information based on official Ruter documentation",
        disclaimer: "Disclaimer:",
        ruterDisclaimer:
          "This calculator is an independent project and is not affiliated with, endorsed by, or connected to Ruter AS or any official Ruter services.",
        // Results section
        discountSummary: "Your Reis Discount Summary",
        zone: "Zone:",
        currentDiscountLevel: "Current discount level:",
        tripsPerPeriod: "Trips per",
        originalCost: "Original cost:",
        costWithDiscount: "Cost with Reis discount:",
        averageDiscount: "Average discount:",
        youSave: "You save",
        per: "per",
        tips: "Tips",
        discountWillIncrease:
          "📈 Your discount will increase as you buy more tickets this period!",
        considerIncreasing:
          "💡 Consider increasing your trips to reach higher discount tiers",
        greatDiscounts: "✅ Great! You're getting good discounts with Reis",
        reisAutoApplied:
          "🎫 Reis discounts are automatically applied in the Ruter app to single ticket",
        reisBasedOn30Days:
          "📅 Reis is based on tickets bought in the last 30 days",
        discountResets:
          "🔄 Your Reis discount level will reset if you don't buy tickets for 30 days",
        actualDiscountsDepend:
          "⚠️ Remember: actual discounts depend on your 30-day rolling usage",
        // Comparison section
        ticketComparison: "💰 Ticket Comparison for",
        comparisonDescription:
          "Here's how different ticket options compare for your usage:",
        recommended: "✅ RECOMMENDED",
        save: "Save",
        more: "more",
        ticketsNeeded: "tickets needed",
        recommendation: "💡 Recommendation:",
        stickWithReis:
          "Stick with Reis single tickets - you're getting good discounts for your usage pattern!",
        considerBuying: "Consider buying a",
        toSave: "to save",
        comparedToSingle: "compared to single tickets.",
        reisIsBest:
          "Reis single tickets with discounts are your best option for this usage pattern.",
        wouldBeCheapest:
          "would be cheapest, but the savings might not justify the upfront cost.",
        // Break-even section
        breakEvenAnalysis: "📊 Break-Even Analysis",
        breakEvenDescription:
          "Here's how many trips you need before period tickets become more expensive than Reis:",
        trips: "trips",
        afterTrips: "After",
        costsMoreThan: "trips, Reis (",
        nokPerTrip: "NOK/trip) costs more than a",
        howToUse: "💡 How to use this:",
        howToUseDescription:
          "If you plan to make more trips than the break-even point within the period ticket's validity, consider buying that period ticket instead of individual Reis tickets.",
        // Period text
        hours24: "24 hours",
        days7: "7 days",
        days30: "30 days",
        days365: "365 days",
        // Ticket names
        hourTicket24: "24-hour ticket",
        dayTicket7: "7-day ticket",
        dayTicket30: "30-day ticket",
        ticketAnnual: "Annual ticket",
        reisSingleTickets: "Reis (single tickets with discount)",
      },
      no: {
        title: "Ruter Reis Rabattkalkulator",
        subtitle:
          "Finn ut hvilken rabatt du kan få på Oslos kollektivtransport",
        tripsPerWeek: "Hvor mange turer forventer du per uke?",
        zoneSelection: "Hvor mange soner reiser du gjennom?",
        currentDiscount: "Hva er ditt nåværende Reis-rabattnivå?",
        calculationPeriod: "Beregn for:",
        calculateBtn: "Beregn Rabatt",
        // Zone options
        zone1: "1 sone (Oslo sentrum)",
        zone2: "2 soner",
        zone3: "3 soner",
        zone4: "4 soner",
        zoneAll: "Alle soner (Oslo + Akershus)",
        // Current discount options
        discount0: "0% - Jeg starter på nytt (første 4 billetter)",
        discount5: "5% - Jeg har kjøpt 5-9 billetter nylig",
        discount10: "10% - Jeg har kjøpt 10-14 billetter nylig",
        discount15: "15% - Jeg har kjøpt 15-19 billetter nylig",
        discount20: "20% - Jeg har kjøpt 20-24 billetter nylig",
        discount25: "25% - Jeg har kjøpt 25-29 billetter nylig",
        discount30: "30% - Jeg har kjøpt 30-34 billetter nylig",
        discount35: "35% - Jeg har kjøpt 35-39 billetter nylig",
        discount40: "40% - Jeg har maksimal rabatt (40+ billetter nylig)",
        // Period options
        period1: "24 timer (1 dag)",
        period7: "7 dager (1 uke)",
        period30: "30 dager (1 måned)",
        period365: "365 dager (1 år)",
        // Info section
        howReisWorks: "Slik fungerer Reis-rabatter:",
        discountTier1: "Første 4 billetter: 0% rabatt",
        discountTier2: "Billett 5-9: 5% rabatt",
        discountTier3: "Billett 10-14: 10% rabatt",
        discountTier4: "Billett 15-19: 15% rabatt",
        discountTier5: "Og så videre... opp til 40% maksimal rabatt",
        disclaimer1:
          "* Rabatter beregnes basert på billetter kjøpt de siste 30 dagene",
        disclaimer2: "* Periodebillettpriser er omtrentlige og kan variere",
        sources: "Kilder:",
        sourcesDisclaimer:
          "Pris- og rabattinformasjon basert på offisiell Ruter-dokumentasjon",
        disclaimer: "Ansvarsfraskrivelse:",
        ruterDisclaimer:
          "Denne kalkulatoren er et uavhengig prosjekt og er ikke tilknyttet, godkjent av, eller forbundet med Ruter AS eller noen offisielle Ruter-tjenester.",
        // Results section
        discountSummary: "Din Reis Rabatt Sammendrag",
        zone: "Sone:",
        currentDiscountLevel: "Nåværende rabattnivå:",
        tripsPerPeriod: "Turer per",
        originalCost: "Opprinnelig kostnad:",
        costWithDiscount: "Kostnad med Reis rabatt:",
        averageDiscount: "Gjennomsnittlig rabatt:",
        youSave: "Du sparer",
        per: "per",
        tips: "Tips",
        discountWillIncrease:
          "📈 Din rabatt vil øke når du kjøper flere billetter denne perioden!",
        considerIncreasing:
          "💡 Vurder å øke antall turer for å nå høyere rabattnivåer",
        greatDiscounts: "✅ Flott! Du får gode rabatter med Reis",
        reisAutoApplied:
          "🎫 Reis rabatter påføres automatisk i Ruter-appen på enkeltbilletter",
        reisBasedOn30Days:
          "📅 Reis er basert på billetter kjøpt de siste 30 dagene",
        discountResets:
          "🔄 Ditt Reis rabattnivå vil nullstilles hvis du ikke kjøper billetter på 30 dager",
        actualDiscountsDepend:
          "⚠️ Husk: faktiske rabatter avhenger av din 30-dagers rullerende bruk",
        // Comparison section
        ticketComparison: "💰 Billettsammenligning for",
        comparisonDescription:
          "Slik sammenligner ulike billettopsjoner for din bruk:",
        recommended: "✅ ANBEFALT",
        save: "Spar",
        more: "mer",
        ticketsNeeded: "billetter nødvendig",
        recommendation: "💡 Anbefaling:",
        stickWithReis:
          "Hold deg til Reis enkeltbilletter - du får gode rabatter for ditt bruksmønster!",
        considerBuying: "Vurder å kjøpe en",
        toSave: "for å spare",
        comparedToSingle: "sammenlignet med enkeltbilletter.",
        reisIsBest:
          "Reis enkeltbilletter med rabatter er ditt beste alternativ for dette bruksmønsteret.",
        wouldBeCheapest:
          "ville vært billigst, men besparelsene rettferdiggjør kanskje ikke den opprinnelige kostnaden.",
        // Break-even section
        breakEvenAnalysis: "📊 Break-Even Analyse",
        breakEvenDescription:
          "Her er hvor mange turer du trenger før periodebilletter blir dyrere enn Reis:",
        trips: "turer",
        afterTrips: "Etter",
        costsMoreThan: "turer, koster Reis (",
        nokPerTrip: "NOK/tur) mer enn en",
        howToUse: "💡 Hvordan bruke dette:",
        howToUseDescription:
          "Hvis du planlegger å gjøre flere turer enn break-even punktet innen periodebillettens gyldighet, vurder å kjøpe den periodebilletten i stedet for individuelle Reis billetter.",
        // Period text
        hours24: "24 timer",
        days7: "7 dager",
        days30: "30 dager",
        days365: "365 dager",
        // Ticket names
        hourTicket24: "24-timers billett",
        dayTicket7: "7-dagers billett",
        dayTicket30: "30-dagers billett",
        ticketAnnual: "Årsbillett",
        reisSingleTickets: "Reis (enkeltbilletter med rabatt)",
      },
    };

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
    // Language toggle functionality
    const langEnBtn = document.getElementById("lang-en");
    const langNoBtn = document.getElementById("lang-no");

    langEnBtn.addEventListener("click", () => this.switchLanguage("en"));
    langNoBtn.addEventListener("click", () => this.switchLanguage("no"));

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

    // Initial setup
    this.updateLanguage();
    this.calculate();
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;

    // Update active button
    document
      .getElementById("lang-en")
      .classList.toggle("active", lang === "en");
    document
      .getElementById("lang-no")
      .classList.toggle("active", lang === "no");

    this.updateLanguage();
    this.calculate(); // Recalculate to update results in new language
  }

  updateLanguage() {
    const t = this.translations[this.currentLanguage];

    // Update elements with data-translate attributes
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (t[key]) {
        element.textContent = t[key];
      }
    });

    // Update form labels
    document.querySelector('label[for="trips-per-week"]').textContent =
      t.tripsPerWeek;
    document.querySelector('label[for="zone-selection"]').textContent =
      t.zoneSelection;
    document.querySelector('label[for="current-discount"]').textContent =
      t.currentDiscount;
    document.querySelector('label[for="calculation-period"]').textContent =
      t.calculationPeriod;
    document.getElementById("calculate-btn").textContent = t.calculateBtn;

    // Update select options
    this.updateSelectOptions();

    // Update info section
    this.updateInfoSection();
  }

  updateSelectOptions() {
    const t = this.translations[this.currentLanguage];

    // Zone options
    const zoneSelect = document.getElementById("zone-selection");
    zoneSelect.options[0].textContent = t.zone1;
    zoneSelect.options[1].textContent = t.zone2;
    zoneSelect.options[2].textContent = t.zone3;
    zoneSelect.options[3].textContent = t.zone4;
    zoneSelect.options[4].textContent = t.zoneAll;

    // Current discount options
    const discountSelect = document.getElementById("current-discount");
    discountSelect.options[0].textContent = t.discount0;
    discountSelect.options[1].textContent = t.discount5;
    discountSelect.options[2].textContent = t.discount10;
    discountSelect.options[3].textContent = t.discount15;
    discountSelect.options[4].textContent = t.discount20;
    discountSelect.options[5].textContent = t.discount25;
    discountSelect.options[6].textContent = t.discount30;
    discountSelect.options[7].textContent = t.discount35;
    discountSelect.options[8].textContent = t.discount40;

    // Period options
    const periodSelect = document.getElementById("calculation-period");
    periodSelect.options[0].textContent = t.period1;
    periodSelect.options[1].textContent = t.period7;
    periodSelect.options[2].textContent = t.period30;
    periodSelect.options[3].textContent = t.period365;
  }

  updateInfoSection() {
    const t = this.translations[this.currentLanguage];
    const infoSection = document.querySelector(".info-section");

    infoSection.innerHTML = `
      <h3>${t.howReisWorks}</h3>
      <ul>
        <li><strong>${t.discountTier1}</strong></li>
        <li><strong>${t.discountTier2}</strong></li>
        <li><strong>${t.discountTier3}</strong></li>
        <li><strong>${t.discountTier4}</strong></li>
        <li><strong>${t.discountTier5}</strong></li>
      </ul>
      <p><small>${t.disclaimer1}</small></p>
      <p><small>${t.disclaimer2}</small></p>

      <h3>${t.sources}</h3>
      <ul>
        <li><a href="https://ruter.no/om-vare-billetter/reis-enkeltbilletter-med-rabatt" target="_blank">Ruter Reis Single Tickets with Discount</a></li>
        <li><a href="https://ruter.no/om-vare-billetter/periodebillett" target="_blank">Ruter Period Tickets</a></li>
      </ul>
      <p><small>${t.sourcesDisclaimer}</small></p>

      <h3>${t.disclaimer}</h3>
      <p><small>${t.ruterDisclaimer}</small></p>
    `;
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
    const t = this.translations[this.currentLanguage];

    if (data.totalTrips === 0) {
      resultsSection.innerHTML =
        "<p>Enter the number of trips to see your potential discount.</p>";
      return;
    }

    const periodText = this.getPeriodText(data.period);
    const zoneText = this.getZoneText(data.selectedZone);

    resultsSection.innerHTML = `
            <div class="result-card">
                <h3>${t.discountSummary}</h3>
                <p><strong>${t.zone}</strong> ${zoneText}</p>
                <p><strong>${t.currentDiscountLevel}</strong> ${
      data.currentDiscount
    }%</p>
                <p><strong>${t.tripsPerPeriod} ${periodText}:</strong> ${
      data.totalTrips
    }</p>
                <p><strong>${
                  t.originalCost
                }</strong> ${data.originalCost.toFixed(0)} NOK</p>
                <p><strong>${
                  t.costWithDiscount
                }</strong> ${data.totalCost.toFixed(0)} NOK</p>
                <p><strong>${
                  t.averageDiscount
                }</strong> ${data.averageDiscount.toFixed(1)}%</p>

                ${
                  data.totalSavings > 0
                    ? `
                    <div class="savings-highlight">
                        <div>${t.youSave}</div>
                        <div class="amount">${data.totalSavings.toFixed(
                          0
                        )} NOK</div>
                        <div>${t.per} ${periodText}</div>
                    </div>
                `
                    : ""
                }
            </div>

            <div class="result-card">
                <h3>${t.tips}</h3>
                <ul>
                    ${
                      data.currentDiscount < 40 &&
                      data.averageDiscount > data.currentDiscount
                        ? `<li>${t.discountWillIncrease}</li>`
                        : data.averageDiscount < 10
                        ? `<li>${t.considerIncreasing}</li>`
                        : `<li>${t.greatDiscounts}</li>`
                    }
                    <li>${t.reisAutoApplied}</li>
                    <li>${t.reisBasedOn30Days}</li>
                    <li>${t.discountResets}</li>
                    <li>${t.actualDiscountsDepend}</li>
                </ul>
            </div>
        `;
  }

  displayComparison(comparisons, reisCost, period) {
    const comparisonSection = document.getElementById("comparison");
    const t = this.translations[this.currentLanguage];

    if (comparisons.length === 0) {
      comparisonSection.innerHTML = "";
      return;
    }

    const periodText = this.getPeriodText(period);

    comparisonSection.innerHTML = `
            <h3>${t.ticketComparison} ${periodText}</h3>
            <p>${t.comparisonDescription}</p>

            <div class="comparison-grid">
                ${comparisons
                  .map(
                    (option) => `
                    <div class="ticket-option ${
                      option.isRecommended ? "recommended" : ""
                    }" ${
                      option.isRecommended
                        ? `data-recommended-text="${t.recommended}"`
                        : ""
                    }>
                        <h4>${this.getTicketName(option.name, option.type)}</h4>
                        <div class="price-display">${option.totalCost.toFixed(
                          0
                        )} NOK</div>
                        <div class="price-per-trip">${option.costPerTrip.toFixed(
                          1
                        )} NOK per trip</div>
                        ${
                          option.savings > 0
                            ? `<div class="savings-badge">${
                                t.save
                              } ${option.savings.toFixed(0)} NOK</div>`
                            : option.savings < 0
                            ? `<div style="color: #dc3545; font-size: 0.9rem;">+${Math.abs(
                                option.savings
                              ).toFixed(0)} NOK ${t.more}</div>`
                            : ""
                        }
                        ${
                          option.type !== "reis" && option.ticketsNeeded > 1
                            ? `<div style="color: #666; font-size: 0.8rem; margin-top: 0.5rem;">${option.ticketsNeeded} ${t.ticketsNeeded}</div>`
                            : ""
                        }
                    </div>
                `
                  )
                  .join("")}
            </div>

            <div style="margin-top: 1.5rem; padding: 1rem; background: #e3f2fd; border-radius: 6px;">
                <strong>${t.recommendation}</strong>
                ${this.getRecommendationText(comparisons)}
            </div>
        `;
  }

  getZoneText(zone) {
    const t = this.translations[this.currentLanguage];
    const zoneMap = {
      1: t.zone1,
      2: t.zone2,
      3: t.zone3,
      4: t.zone4,
      all: t.zoneAll,
    };
    return zoneMap[zone] || "Unknown zone";
  }

  getPeriodText(period) {
    const t = this.translations[this.currentLanguage];
    switch (period) {
      case 1:
        return t.hours24;
      case 7:
        return t.days7;
      case 30:
        return t.days30;
      case 365:
        return t.days365;
      default:
        return `${period} ${t.days7.split(" ")[1]}`; // Use 'days' word from translation
    }
  }

  getTicketName(originalName, type) {
    const t = this.translations[this.currentLanguage];

    if (type === "reis") {
      return t.reisSingleTickets;
    }

    // Map English ticket names to translated versions
    if (originalName.includes("24-hour")) {
      return t.hourTicket24;
    } else if (originalName.includes("7-day")) {
      return t.dayTicket7;
    } else if (originalName.includes("30-day")) {
      return t.dayTicket30;
    } else if (originalName.includes("Annual")) {
      return t.ticketAnnual;
    }

    return originalName; // Fallback to original name
  }

  getRecommendationText(comparisons) {
    const t = this.translations[this.currentLanguage];
    const recommended = comparisons.find((c) => c.isRecommended);
    const cheapest = comparisons[0]; // Already sorted by cost

    if (recommended) {
      if (recommended.type === "reis") {
        return t.stickWithReis;
      } else {
        return `${t.considerBuying} ${this.getTicketName(
          recommended.name,
          recommended.type
        )} ${t.toSave} ${recommended.savings.toFixed(0)} NOK ${
          t.comparedToSingle
        }`;
      }
    } else if (cheapest.type === "reis") {
      return t.reisIsBest;
    } else {
      return `${this.getTicketName(cheapest.name, cheapest.type)} ${
        t.wouldBeCheapest
      }`;
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

    const t = this.translations[this.currentLanguage];
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
          type: ticketType,
        });
      }
    });

    if (analyses.length === 0) {
      breakEvenSection.innerHTML = "";
      return;
    }

    breakEvenSection.innerHTML = `
            <h3>${t.breakEvenAnalysis}</h3>
            <p>${t.breakEvenDescription}</p>

            <div class="break-even-grid">
                ${analyses
                  .map(
                    (analysis) => `
                    <div class="break-even-card">
                        <h4>${this.getTicketName(
                          analysis.name,
                          analysis.type
                        )}</h4>
                        <div class="break-even-number">${
                          analysis.breakEvenTrips
                        }</div>
                        <div class="break-even-label">${t.trips}</div>
                        <div class="break-even-details">
                            <small>${t.afterTrips} ${analysis.breakEvenTrips} ${
                      t.costsMoreThan
                    }${(analysis.price / analysis.breakEvenTrips).toFixed(0)} ${
                      t.nokPerTrip
                    } ${this.getTicketName(analysis.name, analysis.type)} (${
                      analysis.price
                    } NOK)</small>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>

            <div class="break-even-tip">
                <strong>${t.howToUse}</strong> ${t.howToUseDescription}
            </div>
        `;
  }
}

// Initialize the calculator when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new RuterDiscountCalculator();
});
