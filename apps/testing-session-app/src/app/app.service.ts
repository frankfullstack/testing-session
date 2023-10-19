import {Injectable} from "@angular/core";

@Injectable()
export class AppService {
    async getPatientsTemperatureAverage(daysCount: number) {
        try {
            const results = await fetch(`https://non-important-host-for-testing-purpuses.com/patients/api/temperature?days=${daysCount}`);
            const patientsTemperature = await results.json() as number[];

            const PatientsTemperatureAverage = (patientsTemperature as number[]).reduce((total, currentPatientTemp) => total += currentPatientTemp, 0) / patientsTemperature.length;
            return { patientsTempAverage: PatientsTemperatureAverage }
        } catch (err) {
            console.log(err)
            return null; // Should be handled in the proper way
        }
    }
}