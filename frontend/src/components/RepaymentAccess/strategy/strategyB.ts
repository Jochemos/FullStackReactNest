import LoanModel from './../dto/loan.model';
import AnswerModel from './../dto/loan.answer.model';


const StrategyB = (data: LoanModel): AnswerModel => {

    const loanData: LoanModel[] = [];

    loanData.push(data);

    const contentLoan = loanData[0];

    const valuesLoan: any[] = [];


    Object.values(contentLoan).map((val) => {
        const textView = `${parseFloat(val)}`;
        return valuesLoan.push(textView);
    });

    // Value assignment for calculation
    const aoc = Number(valuesLoan[0]);
    const rp = Number(valuesLoan[1]);
    const ni = Number(valuesLoan[2]) / 100;
    const co = Number(valuesLoan[3]) / 100;

    // Commission to be considered
    const pc = (aoc * co) + aoc;

    // Amount of installment (details)
    const up = pc * ni;
    const inside = 12 / (12 + ni);
    const outside = inside ** rp;
    const down = (12 * (1 - outside));

    // Amount of installment (base)
    const partOfSum = up / down;

    // Total cost of the loan
    const totalSum = parseFloat(partOfSum.toFixed(2)) * rp;

    const answer = {
        totalCostOfLoan: parseFloat(totalSum.toFixed(2)),
        amountOfInstallment: parseFloat(partOfSum.toFixed(2)),
    };

    return answer;

};

export default StrategyB;
