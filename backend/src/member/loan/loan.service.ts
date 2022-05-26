import { Injectable } from '@nestjs/common';
import LoanModel from 'database/dto/loan.model';

@Injectable()
export default class LoanService {
  constructor() {}

  public async createNewLoan(data: LoanModel): Promise<LoanModel> {
    return data;
  }
}
