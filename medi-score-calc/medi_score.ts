type AirOrOxygenRate = 0 | 2;
type ConsciousnessRate = 0 | 1;

function calculateMediScoreCalc(
  airOrOxygen: AirOrOxygenRate,
  consciousness: ConsciousnessRate,
  respirationRate: number,
  spo2: number,
  temperature: number
): number {
  // Air or oxygen
  const oxygenScore = airOrOxygen;

  // Consciousness
  const consciousnessScore = consciousness === 0 ? 0 : 3;

  // Respiration rate
  let respirationScore = 0;
  if (respirationRate <= 8) {
    respirationScore = 3;
  } else if (respirationRate >= 9 && respirationRate <= 11) {
    respirationScore = 2;
  } else if (respirationRate >= 12 && respirationRate <= 20) {
    respirationScore = 0;
  } else if (respirationRate >= 21 && respirationRate <= 24) {
    respirationScore = 1;
  } else if (respirationRate >= 25) {
    respirationScore = 3;
  }

  // SpO2
  let spo2Score = 0;
  if (spo2 <= 83) {
    spo2Score = 3;
  } else if (spo2 === 84 || spo2 === 85) {
    spo2Score = 2;
  } else if (spo2 === 86 || spo2 === 87) {
    spo2Score = 1;
  } else if ((spo2 >= 88 && spo2 <= 92) || (spo2 >= 93 && airOrOxygen === 0)) {
    spo2Score = 0;
  } else if ((spo2 === 93 || spo2 === 94) && airOrOxygen === 2) {
    spo2Score = 1;
  } else if ((spo2 === 95 || spo2 === 96) && airOrOxygen === 2) {
    spo2Score = 2;
  } else if (spo2 >= 97 && airOrOxygen === 2) {
    spo2Score = 3;
  }

  // Temperature
  let temperatureScore = 0;
  if (temperature <= 35.0) {
    temperatureScore = 3;
  } else if (temperature >= 35.1 && temperature <= 36.0) {
    temperatureScore = 2;
  } else if (temperature >= 36.1 && temperature <= 38.0) {
    temperatureScore = 0;
  } else if (temperature >= 38.1 && temperature <= 39.0) {
    temperatureScore = 1;
  } else if (temperature >= 39.1) {
    temperatureScore = 2;
  }

  // Calculate the total Medi score
  const totalScore =
    oxygenScore +
    consciousnessScore +
    respirationScore +
    spo2Score +
    temperatureScore;

  return totalScore;
}
