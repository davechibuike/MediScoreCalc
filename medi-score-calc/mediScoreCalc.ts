type AirOrOxygen = 0 | 2;
type Consciousness = 0 | 1;

function calculateMediScore(
  airOrOxygen: AirOrOxygen,
  consciousness: Consciousness,
  respirationRate: number,
  spo2: number,
  temperature: number
): number {
  const oxygenScore = airOrOxygen; // 0 for air, 2 for oxygen

  const consciousnessScore = consciousness === 0 ? 0 : 3; // 0 if alert, 3 if CVPU

  const respirationScore =
    respirationRate <= 8
      ? 3
      : respirationRate <= 11
      ? 2
      : respirationRate <= 20
      ? 0
      : respirationRate <= 24
      ? 1
      : 3;

  const spo2Score =
    spo2 <= 83
      ? 3
      : spo2 <= 85
      ? 2
      : spo2 <= 87
      ? 1
      : spo2 <= 92
      ? 0
      : spo2 <= 94 && airOrOxygen === 2
      ? 1
      : spo2 <= 96 && airOrOxygen === 2
      ? 2
      : spo2 >= 97 && airOrOxygen === 2
      ? 3
      : 0;

  const temperatureScore =
    temperature <= 35.0
      ? 3
      : temperature <= 36.0
      ? 2
      : temperature <= 38.0
      ? 0
      : temperature <= 39.0
      ? 1
      : 2;

  return (
    oxygenScore +
    consciousnessScore +
    respirationScore +
    spo2Score +
    temperatureScore
  );
}
