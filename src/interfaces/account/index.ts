import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccountInterface {
  id?: string;
  balance: number;
  accountant_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  accountant_id?: string;
}
