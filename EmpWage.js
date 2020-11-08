
{
    const IS_PART_TIME = 1;
    const IS_Full_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=20;
    const MAX_HRS_IN_MONTH=160;
    function getEmpHrs(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
                break;
        
            case IS_Full_TIME:
                return FULL_TIME_HOURS;
                break;
            default:
                return 0;
            }
        }

        function calcDailyWage(empHrs){
            return empHrs*WAGE_PER_HOUR;
        }
        let totalEmpHrs=0;
        let totalWorkingDays=0;
        let empDailyWageArr = new Array();
        while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10)%3;
            empHrs=getEmpHrs(empCheck);
            totalEmpHrs+=empHrs;
            empDailyWageArr.push(calcDailyWage(empHrs));
        }
        let empWage = calcDailyWage(totalEmpHrs);
        console.log("UC 6 -Total days: "+totalWorkingDays + " Total hrs: "+totalEmpHrs + " Emp wage: "+empWage)
}