function countryLanguage(country) {
    return 'England, USA'.includes(country) ? 'English' : 'Spain, Argentina, Mexico'.includes(country) ? 'Spanish' : "unknown";
}