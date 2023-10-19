import {AppService} from "./app.service";

const DUMMY_MOCKED_PATIENTS_TEMPERATURES = [36, 37.5, 36, 36.2, 38, 39.1, 38];
const DUMMY_MOCKED_PATIENTS_TEMPERATURES_AVERAGE = 37.25714285714285;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(DUMMY_MOCKED_PATIENTS_TEMPERATURES)
}));

describe('getPatientsTemperatureAverage()',  () => {
    const mockedAppService = new AppService();
    let averagePatientTemperature: { patientsTempAverage: number } | null ;

    beforeEach(async () => {
        averagePatientTemperature = await mockedAppService.getPatientsTemperatureAverage(7);
    })

    it('Should get the correct average of patients temperature', () => {
        expect(averagePatientTemperature).toEqual({ patientsTempAverage: DUMMY_MOCKED_PATIENTS_TEMPERATURES_AVERAGE });
    })
})