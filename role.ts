export interface IRole {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: any;
  designation: any;
  RoleId: number;
  role: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface Employee {
  empName: string;
  empId: string;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
}
