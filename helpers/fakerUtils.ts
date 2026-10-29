import { faker } from "@faker-js/faker";

function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export class FakerData {
    static getFirstName(): string {
        return faker.person.firstName();
    }

    static getMiddleName(): string {
        return faker.person.middleName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getOrganizationName(): string {
        return capitalizeFirstLetter(faker.company.buzzNoun());
    }

    static getcurrentYear(): string {
        return `${faker.date.anytime().getFullYear() - 2}`;
    }

    static getMobileNumber(): string {
        return getPhoneNumber();
    }

    static getEmail(): string {
        return faker.internet.email();
    }

    static getAddress(): string {
        return faker.location.streetAddress();
    }

    static getCity(): string {
        return faker.location.city();
    }

    static getStreet(): string {
        return faker.location.street();
    }

    static getPinCode(): string {
        return faker.location.zipCode("######");
    }

    static getState(): string {
        return faker.location.state();
    }

    static getCountry(): string {
        return faker.location.country();
    }

    static addressName(): string {
        return `${faker.location.countryCode()} ${faker.location.county()}`;
    }

    static getWebsite(): string {
        return faker.internet.url();
    }

    static getAwardName(): string {
        return faker.helpers.arrayElement([
            "Excellency Award",
            "Leadership Award",
            "Trailblazer Award",
            "Pioneer Award"
        ]);
    }

    static jobRole(): string {
        return faker.person.jobTitle();
    }

    static equipmentName(): string {
        return faker.commerce.productMaterial();
    }

    static getTagNames(): string {
        return faker.hacker.noun();
    }

    static getLocationName(): string {
        return faker.location.street();
    }

    static getcertificationTitle(): string {
        return `${faker.word.sample()} ${faker.word.noun()}`;
    }

    static AssessmentTitle(): string {
        return `${faker.word.noun()} ${faker.word.verb()} ${faker.word.sample()}`;
    }

    static generateQuestion(): string {
        return `${faker.lorem.sentence({ min: 3, max: 4 })} ?`;
    }

    static getCourseName(): string {
        const adjective = faker.hacker.adjective();
        const noun = faker.hacker.noun();
        const verb = faker.hacker.verb();
        return `${capitalizeFirstLetter(adjective)} ${capitalizeFirstLetter(noun)} ${capitalizeFirstLetter(verb)}`;
    }

    static getUserId(): string {
        const fName = faker.person.firstName();
        return faker.internet.email({ firstName: fName });
    }

    static getEmployeeid(): string {
        const employeeId = faker.string.numeric({ length: 4 });
        return `EMP-${employeeId}`;
    }

    static getCertificationNumber(): string {
        const certId = faker.string.numeric({ length: 4 });
        return `CER-${certId}`;
    }

    static getRandomSkill(): string {
        return faker.hacker.adjective();
    }

    static randomCityName(): string {
        return faker.person.jobArea();
    }

    static getSession(): string {
        return faker.person.jobDescriptor();
    }

    static getDuration(): string {
        return faker.number.int({ min: 1, max: 8 }).toString();
    }

    static getDescription(): string {
        return faker.lorem.paragraph(1);
    }

    static getCategory(): string {
        return `${capitalizeFirstLetter(faker.company.buzzVerb())} ${capitalizeFirstLetter(faker.company.buzzNoun())}`;
    }

    static getMaxseats(): number {
        return faker.number.int({ min: 20, max: 100 });
    }

    static getPrice(): string {
        return faker.commerce.price();
    }

    static getQualification() {
        return {
            degree: faker.helpers.arrayElement(['Bachelor', 'Master', 'PhD', 'Certificate', 'Diploma']),
            fieldOfStudy: faker.helpers.arrayElement(['Computer Science', 'Engineering', 'Business', 'Arts', 'Science']),
            institution: faker.company.name(),
            graduationDate: faker.date.past({ years: 10 }).toLocaleDateString(),
            grade: faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E']),
        };
    }

    static getMeetingUrl(): string {
        return faker.internet.url();
    }

    static getRandomTitle(): string {
        return `${capitalizeFirstLetter(faker.hacker.noun())} ${capitalizeFirstLetter(faker.hacker.noun())}`;
    }

    // Static Date Methods
    // Static Date Methods inside FakerData class
static getPastDate(): string {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 25); // Set realistic DOB (25 years ago)
    const year = String(date.getFullYear());
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${day}-${month}`; // yyyy-dd-mm format
}

static getFutureDate(): string {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 3); // 3 years in future
    const year = String(date.getFullYear());
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${day}-${month}`; // yyyy-dd-mm format
}
}

// Standalone Helper Functions
export function getCreditCardNumber(): string {
    return faker.finance.creditCardNumber();
}

export function getPhoneNumber(): string {
    const startDigit = faker.number.int({ min: 7, max: 9 });
    const restDigits = faker.string.numeric({ length: 9 });
    return `${startDigit}${restDigits}`;
}

export function getCVV(): string {
    return faker.finance.creditCardCVV();
}

export function score(): string {
    const min = 50;
    const max = 100;
    const step = 5;
    const range = Math.floor((max - min) / step) + 1;
    const randomMultiple = Math.floor(Math.random() * range) * step + min;
    return randomMultiple.toString();
}

export function generateCreditScore(): number {
    return faker.number.int({ min: 300, max: 850 });
}

export function getRandomSeat(): string {
    return faker.number.int({ min: 1, max: 100 }).toString();
}

export function gettomorrowDateFormatted(): string {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

export function getCurrentDateFormatted(): string {
    const date = new Date();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

export function getFutureyear(): string {
    const date = new Date();
    date.setDate(date.getDate() - 2);
    date.setMonth(date.getMonth() - 2);
    date.setFullYear(date.getFullYear() + 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${month}/${day}/${year}`;
}

export function getnextMonthFormatted(): string {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() + 2);
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

export function getcardExpiryDate(): string {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const yy = year.toString().slice(2);
    return `${month}/${yy}`;
}

export function getPonumber(): string {
    const startDigit = faker.number.int({ min: 12, max: 14 });
    const restDigits = faker.string.numeric({ length: 6 });
    return `${startDigit}${restDigits}`;
}

export function getCCnumber(): string {
    const startDigit = faker.number.int({ min: 10, max: 12 });
    const restDigits = faker.string.numeric({ length: 6 });
    return `${startDigit}${restDigits}`;
}