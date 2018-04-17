var datas = [
  {
    "name" : "Mercedes",
    "logo" : "images/mercedes/mercedes500x500.png",
    "hostname" : "mercedes.com",
    "images" : {
      "family-day-cloudless" : "images/mercedes/family-day-cloudless.jpg",
      "family-day-rainy" : "images/mercedes/family-day-rainy.jpg",
      "family-night-cloudless" : "images/mercedes/family-night-cloudless.jpg",
      "family-night-rainy" : "images/mercedes/family-night-rainy.jpg",
      "single-day-cloudless" : "images/mercedes/single-day-cloudless.jpg",
      "single-day-rainy" : "images/mercedes/single-day-rainy.jpg",
      "single-night-cloudless" : "images/mercedes/single-night-cloudless.jpg",
      "single-night-rainy" : "images/mercedes/single-night-rainy.jpg"
    },
    "wording" : {
      "title" : {
        "family-day-cloudless-ny" : "The V-Class: From the peaks to the beach.",
        "family-day-rainy-ny" : "The V-Class: From the peaks to the beach, whatever the conditions.",
        "family-night-cloudless-ny" : "The V-Class : the spacious sedan with the star.",
        "family-night-rainy-ny" : "The V-Class : the spacious sedan with the star, whatever the conditions.",
        "family-day-cloudless-paris" : "Classe V : De la montagne à la mer.",
        "family-day-rainy-paris" : "Classe V : De la montagne à la mer, par tous les temps.",
        "family-night-cloudless-paris" : "Classe V : La vie en grand.",
        "family-night-rainy-paris" : "Classe V : La vie en grand, par tous les temps",
        "family-day-cloudless-london" : "The V-Class: From the peaks to the beach.",
        "family-day-rainy-london" : "The V-Class: From the peaks to the beach, whatever the conditions.",
        "family-night-cloudless-london" : "The V-Class : the spacious sedan with the star.",
        "family-night-rainy-london" : "The V-Class : the spacious sedan with the star, whatever the conditions.",
        "single-day-cloudless-ny" : "Take a warm ride, even under a chilly sky. Mercedes SLC, starting 39 999$",
        "single-day-rainy-ny" : "From open roadster to closed coupe in under 20 seconds. Mercedes SLC, starting 39 999$",
        "single-night-cloudless-ny" : "Shifts like a dream, swings with your mood. Mercedes SLC, starting 39 999$",
        "single-night-rainy-ny" : "From open roadster to closed coupe in under 20 seconds. Mercedes SLC, starting 39 999$",
        "single-day-cloudless-paris" : "Toujours au chaud, même par temps froid. Mercedes SLC, dès de 39 999€",
        "single-day-rainy-paris" : "Toit escamotable en moins de 20 seconds. Mercedes SLC, dès de 39 999€",
        "single-night-cloudless-paris" : "Le dynamisme à la puissance neuf. Mercedes SLC, dès de 39 999€",
        "single-night-rainy-paris" : "Toit escamotable en moins de 20 seconds. Mercedes SLC, dès de 39 999€",
        "single-day-cloudless-london" : "Take a warm ride, even under a chilly sky. Mercedes SLC, starting 39 999£",
        "single-day-rainy-london" : "From open roadster to closed coupe in under 20 seconds. Mercedes SLC, starting 39 999£",
        "single-night-cloudless-london" : "Shifts like a dream, swings with your mood. Mercedes SLC, starting 39 999£",
        "single-night-rainy-london" : "From open roadster to closed coupe in under 20 seconds. Mercedes SLC, starting 39 999£"
      },
      "description" : {
        "family-day-cloudless-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "family-day-rainy-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "family-night-cloudless-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "family-night-rainy-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "single-day-cloudless-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "single-day-rainy-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "single-night-cloudless-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "single-night-rainy-ny" : "Visit our NY Mercedes Benz store at 770 11th Ave, to configure your dream vehicle.",
        "family-day-cloudless-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "family-day-rainy-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "family-night-cloudless-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "family-night-rainy-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "single-day-cloudless-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "single-day-rainy-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "single-night-cloudless-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "single-night-rainy-paris" : "Visitez notre magasin Mercedes Benz au 344 av. N.Bonaparte - 92500 Rueil-Malmaison pour configurer le véhicule de vos rêves.",
        "family-day-cloudless-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
        "family-day-rainy-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
        "family-night-cloudless-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
        "family-night-rainy-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
        "single-day-cloudless-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
        "single-day-rainy-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
        "single-night-cloudless-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
        "single-night-rainy-london" : "Visit our London Mercedes Benz store at Pier House Cheyne Walk, Chelsea, to configure your dream vehicle.",
      }
    },
    "redirect" : "https://configurator.mercedes-benz.com/configurator/gb/en/class/body?model=2050422&nst=GB1&subprocess=CCci"
  },
  {
    "name" : "Uniqlo",
    "logo" : "images/uniqlo/uniqlo500x500.png",
    "hostname" : "uniqlo.com",
    "images" : {
      "family-day-cloudless" : "images/uniqlo/family-day-cloudless.jpg",
      "family-day-rainy" : "images/uniqlo/family-day-rainy.jpg",
      "family-night-cloudless" : "images/uniqlo/family-night-cloudless.jpg",
      "family-night-rainy" : "images/uniqlo/family-night-rainy.jpg",
      "single-day-cloudless" : "images/uniqlo/single-day-cloudless.jpg",
      "single-day-rainy" : "images/uniqlo/single-day-rainy.jpg",
      "single-night-cloudless" : "images/uniqlo/single-night-cloudless.jpg",
      "single-night-rainy" : "images/uniqlo/single-night-rainy.jpg"
    },
    "wording" : {
      "title" : {
        "family-day-cloudless-ny" : "Denim Jeans follow you anywhere.",
        "family-day-rainy-ny" : "Start your day with UJeans. No umbrellas needed!",
        "family-night-cloudless-ny" : "Traditional selvedge denim follow you anywhere.",
        "family-night-rainy-ny" : "Traditional selvedge denim follow you anywhere.",
        "single-day-cloudless-ny" : "The jean you're looking for is in our stores!",
        "single-day-rainy-ny" : "Start your day with UJeans. No umbrellas needed!",
        "single-night-cloudless-ny" : "The jean you're looking for is in our stores!",
        "single-night-rainy-ny" : "No umbrellas needed.",
        "family-day-cloudless-paris" : "Votre jeans Denim vous suit partout.",
        "family-day-rainy-paris" : "Commencez votre journée en jeans Uniqlo. Pas besoin de parapluie!",
        "family-night-cloudless-paris" : "Traditional selvedge denim follow you anywhere.",
        "family-night-rainy-paris" : "Votre Denim selvedge vous suit partout.",
        "single-day-cloudless-paris" : "Le jeans que vous cherchez est dans notre boutique.",
        "single-day-rainy-paris" : "Commencez votre journée en jeans Uniqlo. Pas besoin de parapluie!",
        "single-night-cloudless-paris" : "Le jeans que vous cherchez est dans notre boutique.",
        "single-night-rainy-paris" : "Finissez votre journée en jeans Uniqlo. Pas besoin de parapluie!",
        "family-day-cloudless-london" : "Denim Jeans follow you anywhere.",
        "family-day-rainy-london" : "Start your day with UJeans. No umbrellas needed!",
        "family-night-cloudless-london" : "Traditional selvedge denim follow you anywhere.",
        "family-night-rainy-london" : "Traditional selvedge denim follow you anywhere.",
        "single-day-cloudless-london" : "The jean you're looking for is in our stores!",
        "single-day-rainy-london" : "Start your day with UJeans. No umbrellas needed!",
        "single-night-cloudless-london" : "The jean you're looking for is in our stores!",
        "single-night-rainy-london" : "Your everyday Jeans. No umbrellas needed."
      },
      "description" : {
        "family-day-cloudless-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "family-day-rainy-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "family-night-cloudless-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "family-night-rainy-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "single-day-cloudless-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "single-day-rainy-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "single-night-cloudless-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "single-night-rainy-ny" : "Times Square, 5th Avenue, Soho... Discover our New-York stores.",
        "family-day-cloudless-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "family-day-rainy-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "family-night-cloudless-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "family-night-rainy-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "single-day-cloudless-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "single-day-rainy-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "single-night-cloudless-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "single-night-rainy-paris" : "Montparnasse, Opéra, Le Marais... Découvrez nos boutiques parisiennes.",
        "family-day-cloudless-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
        "family-day-rainy-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
        "family-night-cloudless-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
        "family-night-rainy-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
        "single-day-cloudless-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
        "single-day-rainy-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
        "single-night-cloudless-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
        "single-night-rainy-london" : "Oxford, Regent Street, Westfield... Discover our London stores.",
      }
    },
    "redirect" : "https://www.uniqlo.com/uk/en/home?customCountryFlag=GB"
  },
  {
    "name" : "Starbucks",
    "logo" : "images/starbucks/starbucks500x500.png",

    "hostname" : "starbucks.com",

    "images" : {
      "family-day-cloudless" : "images/starbucks/family-day-cloudless.jpg",
      "family-day-rainy" : "images/starbucks/family-day-rainy.jpg",
      "family-night-cloudless" : "images/starbucks/family-day-rainy.jpg",
      "family-night-rainy" : "images/starbucks/family-night-rainy.jpg",
      "single-day-cloudless" : "images/starbucks/single-day-cloudless.jpg",
      "single-day-rainy" : "images/starbucks/single-day-rainy.jpg",
      "single-night-cloudless" : "images/starbucks/single-night-cloudless.jpg",
      "single-night-rainy" : "images/starbucks/single-night-rainy.jpg"
    },

    "wording" : {
      "title" : {
        "family-day-cloudless-ny" : "Recharge your afternoon, you deserve a break.",
        "family-day-rainy-ny" : "Recharge your afternoon, you deserve a break until the end of the rain.",

        "family-night-cloudless-ny" : "Fancy having an evening coffee?",
        "family-night-rainy-ny" : "Fancy having an evening coffee until the end of the rain?",

        "single-day-cloudless-ny" : "Recharge your afternoon, you deserve a break.",
        "single-day-rainy-ny" : "Recharge your afternoon, you deserve a break until the end of the rain.",

        "single-night-cloudless-ny" : "Fancy having an evening coffee?",
        "single-night-rainy-ny" : "Fancy having an evening coffee until the end of the rain?",




        "family-day-cloudless-paris" : "The V-Class: From the peaks to the beach.",
        "family-day-rainy-paris" : "No umbrellas needed.",

        "family-night-cloudless-paris" : "The V-Class : the spacious sedan with the star.",
        "family-night-rainy-paris" : "No umbrellas needed.",

        "single-day-cloudless-paris" : "The C-CLass, driving performance.",
        "single-day-rainy-paris" : "No umbrellas needed.",

        "single-night-cloudless-paris" : "The C-CLass, driving performance.",
        "single-night-rainy-paris" : "No umbrellas needed.",

        "family-day-cloudless-london" : "The V-Class: From the peaks to the beach.",
        "family-day-rainy-london" : "No umbrellas needed.",

        "family-night-cloudless-london" : "The V-Class : the spacious sedan with the star.",
        "family-night-rainy-london" : "No umbrellas needed.",

        "single-day-cloudless-london" : "The C-CLass, driving performance.",
        "single-day-rainy-london" : "No umbrellas needed.",

        "single-night-cloudless-london" : "The C-CLass, driving performance.",
        "single-night-rainy-london" : "No umbrellas needed."
      },
      "description" : {
        "family-day-cloudless-ny" : "See you in our Manhattan stores!",
        "family-day-rainy-ny" : "See you in our Manhattan stores!",

        "family-night-cloudless-ny" : "See you in our Manhattan stores!",
        "family-night-rainy-ny" : "See you in our Manhattan stores!",

        "single-day-cloudless-ny" : "See you in our Manhattan stores!",
        "single-day-rainy-ny" : "See you in our Manhattan stores!",

        "single-night-cloudless-ny" : "See you in our Manhattan stores!",
        "single-night-rainy-ny" : "See you in our Manhattan stores!",

        "family-day-cloudless-paris" : "See you in our Champs Elysées store!",
        "family-day-rainy-paris" : "See you in our Champs Elysées store!",

        "family-night-cloudless-paris" : "See you in our Champs Elysées store!",
        "family-night-rainy-paris" : "See you in our Champs Elysées store!",

        "single-day-cloudless-paris" : "See you in our Champs Elysées store!",
        "single-day-rainy-paris" : "See you in our Champs Elysées store!",

        "single-night-cloudless-paris" : "See you in our Champs Elysées store!",
        "single-night-rainy-paris" : "See you in our Champs Elysées store!",

        "family-day-cloudless-london" : "See you in our Covent Garden store!",
        "family-day-rainy-london" : "See you in our Covent Garden store!",

        "family-night-cloudless-london" : "See you in our Covent Garden store!",
        "family-night-rainy-london" : "See you in our Covent Garden store!",

        "single-day-cloudless-london" : "See you in our Covent Garden store!",
        "single-day-rainy-london" : "See you in our Covent Garden store!",

        "single-night-cloudless-london" : "See you in our Covent Garden store!",
        "single-night-rainy-london" : "See you in our Covent Garden store!",

      }
    },

    "redirect" : "https://www.uniqlo.com/uk/en/home?customCountryFlag=GB"

  }
];

module.exports = datas;
