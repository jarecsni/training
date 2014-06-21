/**
 * Created by janos on 19/06/2014.
 */
describe("The calculator", function ()
{
    var calc;
    var logger;

    beforeEach(function ()
    {
        calc = new Calculator();
    });

    it("should exist", function ()
    {
        expect(calc).toBeDefined();
    });

    describe("should do addition", function ()
    {
        it("should add two numbers", function ()
        {
            var result = calc.add(23, 32);
            expect(result).toBe(55);
        });
    });

    describe("should log results", function ()
    {
        beforeEach(function ()
        {
            logger = new Logger();
            calc = new Calculator(logger);

        });

        it("should call the log method", function ()
        {
//            var logger1 = new Logger();
//            var calc1 = new Calculator(logger1);
            spyOn(logger, "log");
            calc.add(1, 2);
            expect(logger.log).toHaveBeenCalled();
        });

/*        it("Should log to a test fake", function ()
        {
            var msgs = [];
            spyOn(logger, "log").andCallFake(function (msg)
            {
                msgs.push(msg);
            });
            calc.add(1, 1);
            calc.add(2, 2);
            expect(msgs).toEqual(["1 + 1 = 2", "2 + 2 = 4"]);
        });*/
    });
});