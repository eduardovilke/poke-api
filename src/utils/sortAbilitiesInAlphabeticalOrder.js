export function sortAbilitiesInAlphabeticalOrder (abilities) {
  return abilities.sort((a,b) => {
    if(a.ability.name < b.ability.name) return -1;
    if(a.ability.name > b.ability.name) return 1;
    return 0;
  })
}