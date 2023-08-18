/**
 * 
 */
import { getMonth } from './index'

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("should return 'janvier' for date 2022-01-01", () => {
            const testDate = new Date("2022-01-01");
            const result = getMonth(testDate);
            expect(result).toBe("janvier");
        });

        it("should return 'juillet' for date 2022-07-08", () => {
            const testDate = new Date("2022-07-08");
            const result = getMonth(testDate);
            expect(result).toBe("juillet");
        });
    });
});
