/**
 * Created by janos on 19/06/2014.
 */

// Added a comment :)
function Calculator(logger)
{
    this.add = function (a, b)
    {
        var result = a + b;
        if (logger)
        {
            logger.log("The result was " + result);
        }
        return result;
    }
}

function Logger()
{
    this.log = function (msg)
    {

    }
}