// /js/faq-config-nl.js
window.FAQ_CONFIG = {
  lang: 'nl',
  title: "Hoe kunnen we helpen?",
  startText: "Kies een categorie om snel je antwoord te vinden.",

  // Top-categorieën
  categories: [
    { id: "al-ticket", label: "Ik heb al een ticket", type: "menu", children: [
      { id: "booking-wijzigen", label: "Ik wens mijn boeking (datum) aan te passen", type: "menu", children: [
        { id: "via-koop-tickets", label: "Hoe? Via ‘Koop tickets’ → ‘Ik wil mijn datum wijzigen’", type: "answer",
          answer: "Ga naar <a href='/nl/koop-tickets'>Koop tickets</a> en kies onderaan de optie <strong>‘Ik wil mijn datum wijzigen’</strong> (indien beschikbaar voor jouw ticket)." },
        { id: "contact-als-nodig", label: "Werkt dat niet? Contact via e-mail", type: "answer",
          answer: "Mail naar <a href='mailto:info@jungle-city.be'>info@jungle-city.be</a> met je <strong>ordernummer</strong> en <strong>gewenste nieuwe datum</strong>. Niet altijd mogelijk, maar we kijken wat kan." }
      ]},

      { id: "voucher-inruilen", label: "Ik kan mijn voucher niet omwisselen", type: "menu", children: [
        { id: "flex-ticket", label: "Heb je een FLEX-ticket?", type: "answer",
          answer: "Met een <strong>FLEX-ticket</strong> hoef je niet om te wisselen. Kom gewoon naar het park en scan aan de receptie." },
        { id: "partner-code", label: "Heb je een code van een partner?", type: "menu", children: [
          { id: "code-waarde", label: "Code met waarde (bv. €15)", type: "answer",
            answer: "Gebruik <a href='/nl/koop-tickets'>Koop tickets</a> → kies <strong>‘Ik heb nog geen ticket’</strong> en wissel je waardecode in tijdens het afrekenen." },
          { id: "code-specifiek", label: "Code voor specifieke toegang (naam op ticket)", type: "answer",
            answer: "Ga naar <a href='/nl/koop-tickets'>Koop tickets</a> → kies <strong>‘Ik heb al een ticket’</strong> en volg de stappen voor je specifieke toegang." }
        ]}
      ]},

      { id: "roi", label: "Wat is het interieurreglement?", type: "answer",
        answer: "Bekijk ons reglement en voorwaarden: <a href='https://www.jungle-city.be/nl/algemene-voorwaarden' target='_blank' rel='noopener'>Algemene voorwaarden</a>." }
    ]},

    { id: "geen-ticket", label: "Ik heb nog geen ticket", type: "menu", children: [
      { id: "toegang-met-datum", label: "Toegang met datum (geboekt op dag)", type: "answer",
        answer: "Deze tickets zijn <strong>goedkoper</strong> dan FLEX/ADD. Datum aanpassen kan tot <strong>3 dagen</strong> voordien." },
      { id: "toegang-zonder-datum", label: "Toegang zonder datum (FLEX)", type: "answer",
        answer: "<strong>1 jaar geldig</strong>. Je hoeft niet te omwisselen—scan aan de receptie. Ook geschikt als <strong>cadeaubon</strong>." },
      { id: "verjaardag", label: "Verjaardag", type: "answer",
        answer: "Algemene info: <a href='https://www.jungle-city.be/nl/je-verjaardag-in-jungle-city' target='_blank' rel='noopener'>Verjaardag in Jungle City</a>. Reserveren kan via die link of via <a href='/nl/koop-tickets'>Koop tickets</a> → <strong>Verjaardagsfeesten</strong>." },
      { id: "cadeaubon", label: "Cadeaubon", type: "answer",
        answer: "Koop online een cadeaubon. De ontvanger kan de <strong>code</strong> omwisselen voor een online boeking via onze website." },
      { id: "abonnement", label: "Abonnement", type: "answer",
        answer: "Abonnement is <strong>1 jaar geldig</strong>. Check openingsuren via de homepage of <a href='https://www.jungle-city.be/nl/info-contact' target='_blank' rel='noopener'>Info & contact</a>." }
    ]},

    { id: "lengtes", label: "Lengtes attracties", type: "answer",
      answer: "Bekijk per attractie de minimumlengtes: <a href='https://www.jungle-city.be/nl/ontdek-het-park' target='_blank' rel='noopener'>Ontdek het park</a>." },

    { id: "dieren", label: "Dieren", type: "answer",
      answer: "Alle info over de dieren vind je hier: <a href='https://www.jungle-city.be/nl/dieren' target='_blank' rel='noopener'>Dieren in Jungle City</a>." },

    { id: "parking", label: "Parking", type: "answer",
      answer: "<strong>Gratis parking</strong> net voor het park. Elders parkeren kan <strong>boetes</strong> opleveren. We werken ook samen met parking <strong>Imagix</strong> (±13’ te voet) — betalend & beveiligd." },

    { id: "tarieven", label: "Tarieven", type: "answer",
      answer: "Toegang per <strong>lengte</strong>. <strong>Onder 90 cm gratis</strong>, vanaf 90 cm betalend. Volwassenen hebben een voordeliger tarief. Zie ook: <a href='https://www.jungle-city.be/nl/koop-tickets' target='_blank' rel='noopener'>Koop tickets</a>." },

    { id: "openingstijden", label: "Openingstijden", type: "answer",
      answer: "Online te raadplegen via de homepage of <a href='https://www.jungle-city.be/nl/info-contact' target='_blank' rel='noopener'>Info & contact</a>." }
  ]
};
