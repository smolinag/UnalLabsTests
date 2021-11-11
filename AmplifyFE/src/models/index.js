// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Organization, Laboratory, LabSemester, UserLabSemester, User, UserLabPracticeSession, LabPracticeSession, LabPracticeOutput, LabPracticeSessionOutput, LabPracticeSessionCommand, LabPracticeCommand, LabPracticeParameter, LabPracticeDevice, RoleUser, Role, PrivilegeRole, Privilege, LabPractice } = initSchema(schema);

export {
  Organization,
  Laboratory,
  LabSemester,
  UserLabSemester,
  User,
  UserLabPracticeSession,
  LabPracticeSession,
  LabPracticeOutput,
  LabPracticeSessionOutput,
  LabPracticeSessionCommand,
  LabPracticeCommand,
  LabPracticeParameter,
  LabPracticeDevice,
  RoleUser,
  Role,
  PrivilegeRole,
  Privilege,
  LabPractice
};