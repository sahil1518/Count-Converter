
export function logic(system, number) {

  if (system === 'Select') {
    // return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return [number, number, number, number, number, number, number, number, number, number];
  }

  if (system === 'Tex') {
    return [number, (number * 9.100).toFixed(3), (number * 0.028).toFixed(3), (number * 590).toFixed(3), (number * 1940).toFixed(3), (number * 1650).toFixed(3), (number * 886).toFixed(3), (number * 3100).toFixed(3), (number * 10).toFixed(3), (number * 1000).toFixed(3)];
  }

  if (system === 'Denier') {
    return [(number * 0.110).toFixed(3), number, (number * 0.003).toFixed(3), (number * 5363.636).toFixed(3), (number * 17636.364).toFixed(3), (number * 15000).toFixed(3), (number * 8054.545).toFixed(3), (number * 281818.182).toFixed(3), (number * 1.100).toFixed(3), (number * 9090.909).toFixed(3)];
  }

  if (system === 'Grist') {
    return [(number * 35.090).toFixed(3), (number * 319.319).toFixed(3), number, (number * 16.814).toFixed(3), (number * 55.286).toFixed(3), (number * 47.022).toFixed(3), (number * 25.249).toFixed(3), (number * 883.443).toFixed(3), (number * 350.900).toFixed(3), (number * 28.498).toFixed(3)];
  }

  if (system === 'English') {
    return [(number * 590).toFixed(3), (number * 5369).toFixed(3), (number * 16.814), number, (number * 3.288).toFixed(3), (number * 2.797).toFixed(3), (number * 1.502).toFixed(3), (number * 52.542).toFixed(3), (number * 5900).toFixed(3), (number * 5369).toFixed(3)];
  }

  if (system === 'Woollen') {
    return [(number * 1940).toFixed(3), (number * 17654).toFixed(3), (number * 55.286), (number * 0.304).toFixed(3), number, (number * 0.851).toFixed(3), (number * 0.457).toFixed(3), (number * 15.979).toFixed(3), (number * 19400).toFixed(3), (number * 0.515).toFixed(3)];
  }

  if (system === 'Linen') {
    return [(number * 1650).toFixed(3), (number * 15015).toFixed(3), (number * 47.022), (number * 0.358).toFixed(3), (number * 1.176).toFixed(3), number, (number * 0.537).toFixed(3), (number * 18.788).toFixed(3), (number * 16500).toFixed(3), (number * 0.606).toFixed(3)];
  }

  if (system === 'Worsted') {
    return [(number * 886).toFixed(3), (number * 8062.600).toFixed(3), (number * 25.249).toFixed(3), (number * 0.666).toFixed(3), (number * 2.190).toFixed(3), (number * 1.862).toFixed(3), number, (number * 34.989).toFixed(3), (number * 8860).toFixed(3), (number * 1.129).toFixed(3)];
  }

  if (system === 'Dewsbury') {
    return [(number * 31000).toFixed(3), (number * 282100).toFixed(3), (number * 883.443).toFixed(3), (number * 0.019).toFixed(3), (number * 0.063).toFixed(3), (number * 0.053).toFixed(3), (number * 0.029).toFixed(3), number, (number * 310000).toFixed(3), (number * 0.032).toFixed(3)];
  }

  if (system === 'Decitex') {
    return [(number * 0.100).toFixed(3), (number * 0.910).toFixed(3), (number * 0.003).toFixed(3), (number * 5900).toFixed(3), (number * 19400).toFixed(3), (number * 16500).toFixed(3), (number * 8860).toFixed(3), (number * 310000), number, (number * 10000).toFixed(3)];
  }

  if (system === 'Metric') {
    return [(number * 1000).toFixed(3), (number * 9100).toFixed(3), (number * 28.498).toFixed(3), (number * 0.590).toFixed(3), (number * 1.940).toFixed(3), (number * 1.650).toFixed(3), (number * 0.886).toFixed(3), (number * 310000), (number * 10000).toFixed(3), number];
  }

  return null;
}

export function systemValue() {
  return (['Tex', 'Denier', 'Grist', 'English', 'Woollen', 'Linen', 'Worsted', 'Dewsbury', 'Decitex', 'Metric',])
}
