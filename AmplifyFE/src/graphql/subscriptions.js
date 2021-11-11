/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
      id
      country
      region
      city
      type
      name
      description
      phone
      address
      createdBy
      updatedBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Laboratories {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
      id
      country
      region
      city
      type
      name
      description
      phone
      address
      createdBy
      updatedBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Laboratories {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
      id
      country
      region
      city
      type
      name
      description
      phone
      address
      createdBy
      updatedBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Laboratories {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
      id
      name
      description
      createdBy
      updatedBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      Privileges {
        nextToken
        startedAt
      }
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
      id
      name
      description
      createdBy
      updatedBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      Privileges {
        nextToken
        startedAt
      }
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
      id
      name
      description
      createdBy
      updatedBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      Privileges {
        nextToken
        startedAt
      }
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreatePrivilege = /* GraphQL */ `
  subscription OnCreatePrivilege {
    onCreatePrivilege {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Roles {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdatePrivilege = /* GraphQL */ `
  subscription OnUpdatePrivilege {
    onUpdatePrivilege {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Roles {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeletePrivilege = /* GraphQL */ `
  subscription OnDeletePrivilege {
    onDeletePrivilege {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Roles {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateUserLabPracticeSession = /* GraphQL */ `
  subscription OnCreateUserLabPracticeSession {
    onCreateUserLabPracticeSession {
      id
      sessionStartDate
      sessionEndDate
      userID
      labpracticesessionID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeSession {
        id
        startDate
        endDate
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateUserLabPracticeSession = /* GraphQL */ `
  subscription OnUpdateUserLabPracticeSession {
    onUpdateUserLabPracticeSession {
      id
      sessionStartDate
      sessionEndDate
      userID
      labpracticesessionID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeSession {
        id
        startDate
        endDate
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteUserLabPracticeSession = /* GraphQL */ `
  subscription OnDeleteUserLabPracticeSession {
    onDeleteUserLabPracticeSession {
      id
      sessionStartDate
      sessionEndDate
      userID
      labpracticesessionID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeSession {
        id
        startDate
        endDate
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      lastNames
      documentIdNumber
      email
      phone
      userName
      s3AvatarPath
      dateOfBirth
      updatedBy
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      Roles {
        nextToken
        startedAt
      }
      UserLabSemesters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      lastNames
      documentIdNumber
      email
      phone
      userName
      s3AvatarPath
      dateOfBirth
      updatedBy
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      Roles {
        nextToken
        startedAt
      }
      UserLabSemesters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      lastNames
      documentIdNumber
      email
      phone
      userName
      s3AvatarPath
      dateOfBirth
      updatedBy
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      Roles {
        nextToken
        startedAt
      }
      UserLabSemesters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateLabPracticeSessionCommand = /* GraphQL */ `
  subscription OnCreateLabPracticeSessionCommand {
    onCreateLabPracticeSessionCommand {
      id
      requestDate
      executionDate
      status
      parameters
      labpracticesessionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeSession {
        id
        startDate
        endDate
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeCommand {
        id
        name
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLabPracticeSessionCommand = /* GraphQL */ `
  subscription OnUpdateLabPracticeSessionCommand {
    onUpdateLabPracticeSessionCommand {
      id
      requestDate
      executionDate
      status
      parameters
      labpracticesessionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeSession {
        id
        startDate
        endDate
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeCommand {
        id
        name
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLabPracticeSessionCommand = /* GraphQL */ `
  subscription OnDeleteLabPracticeSessionCommand {
    onDeleteLabPracticeSessionCommand {
      id
      requestDate
      executionDate
      status
      parameters
      labpracticesessionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeSession {
        id
        startDate
        endDate
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeCommand {
        id
        name
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLabPracticeSessionOutput = /* GraphQL */ `
  subscription OnCreateLabPracticeSessionOutput {
    onCreateLabPracticeSessionOutput {
      id
      captureDate
      storageDate
      value
      labpracticeoutputID
      labpracticesessionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeSession {
        id
        requestDate
        executionDate
        status
        parameters
        labpracticesessionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeOutput {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLabPracticeSessionOutput = /* GraphQL */ `
  subscription OnUpdateLabPracticeSessionOutput {
    onUpdateLabPracticeSessionOutput {
      id
      captureDate
      storageDate
      value
      labpracticeoutputID
      labpracticesessionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeSession {
        id
        requestDate
        executionDate
        status
        parameters
        labpracticesessionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeOutput {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLabPracticeSessionOutput = /* GraphQL */ `
  subscription OnDeleteLabPracticeSessionOutput {
    onDeleteLabPracticeSessionOutput {
      id
      captureDate
      storageDate
      value
      labpracticeoutputID
      labpracticesessionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeSession {
        id
        requestDate
        executionDate
        status
        parameters
        labpracticesessionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeOutput {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLabPracticeOutput = /* GraphQL */ `
  subscription OnCreateLabPracticeOutput {
    onCreateLabPracticeOutput {
      id
      name
      descriptio
      units
      updatedBy
      createdBy
      labpracticeID
      outputType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        captureDate
        storageDate
        value
        labpracticeoutputID
        labpracticesessionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeSessionOutputs {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateLabPracticeOutput = /* GraphQL */ `
  subscription OnUpdateLabPracticeOutput {
    onUpdateLabPracticeOutput {
      id
      name
      descriptio
      units
      updatedBy
      createdBy
      labpracticeID
      outputType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        captureDate
        storageDate
        value
        labpracticeoutputID
        labpracticesessionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeSessionOutputs {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteLabPracticeOutput = /* GraphQL */ `
  subscription OnDeleteLabPracticeOutput {
    onDeleteLabPracticeOutput {
      id
      name
      descriptio
      units
      updatedBy
      createdBy
      labpracticeID
      outputType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        captureDate
        storageDate
        value
        labpracticeoutputID
        labpracticesessionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeSessionOutputs {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateLabPracticeSession = /* GraphQL */ `
  subscription OnCreateLabPracticeSession {
    onCreateLabPracticeSession {
      id
      startDate
      endDate
      description
      updatedBy
      createdBy
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      LabPracticeSessionCommands {
        nextToken
        startedAt
      }
      LabPracticeSessionOutputs {
        nextToken
        startedAt
      }
      LabPractice {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLabPracticeSession = /* GraphQL */ `
  subscription OnUpdateLabPracticeSession {
    onUpdateLabPracticeSession {
      id
      startDate
      endDate
      description
      updatedBy
      createdBy
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      LabPracticeSessionCommands {
        nextToken
        startedAt
      }
      LabPracticeSessionOutputs {
        nextToken
        startedAt
      }
      LabPractice {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLabPracticeSession = /* GraphQL */ `
  subscription OnDeleteLabPracticeSession {
    onDeleteLabPracticeSession {
      id
      startDate
      endDate
      description
      updatedBy
      createdBy
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserLabPracticeSessions {
        nextToken
        startedAt
      }
      LabPracticeSessionCommands {
        nextToken
        startedAt
      }
      LabPracticeSessionOutputs {
        nextToken
        startedAt
      }
      LabPractice {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLabPracticeDevice = /* GraphQL */ `
  subscription OnCreateLabPracticeDevice {
    onCreateLabPracticeDevice {
      id
      name
      description
      type
      updatedBy
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLabPracticeDevice = /* GraphQL */ `
  subscription OnUpdateLabPracticeDevice {
    onUpdateLabPracticeDevice {
      id
      name
      description
      type
      updatedBy
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLabPracticeDevice = /* GraphQL */ `
  subscription OnDeleteLabPracticeDevice {
    onDeleteLabPracticeDevice {
      id
      name
      description
      type
      updatedBy
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        descriptio
        units
        updatedBy
        createdBy
        labpracticeID
        outputType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLabPracticeParameter = /* GraphQL */ `
  subscription OnCreateLabPracticeParameter {
    onCreateLabPracticeParameter {
      id
      name
      description
      defaultValue
      minValue
      maxValue
      regex
      updatedBy
      createdBy
      labpracticecommandID
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        description
        type
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeCommand {
        id
        name
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLabPracticeParameter = /* GraphQL */ `
  subscription OnUpdateLabPracticeParameter {
    onUpdateLabPracticeParameter {
      id
      name
      description
      defaultValue
      minValue
      maxValue
      regex
      updatedBy
      createdBy
      labpracticecommandID
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        description
        type
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeCommand {
        id
        name
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLabPracticeParameter = /* GraphQL */ `
  subscription OnDeleteLabPracticeParameter {
    onDeleteLabPracticeParameter {
      id
      name
      description
      defaultValue
      minValue
      maxValue
      regex
      updatedBy
      createdBy
      labpracticecommandID
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        description
        type
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeCommand {
        id
        name
        description
        updatedBy
        createdBy
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLabPracticeCommand = /* GraphQL */ `
  subscription OnCreateLabPracticeCommand {
    onCreateLabPracticeCommand {
      id
      name
      description
      updatedBy
      createdBy
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        description
        defaultValue
        minValue
        maxValue
        regex
        updatedBy
        createdBy
        labpracticecommandID
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeParameters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateLabPracticeCommand = /* GraphQL */ `
  subscription OnUpdateLabPracticeCommand {
    onUpdateLabPracticeCommand {
      id
      name
      description
      updatedBy
      createdBy
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        description
        defaultValue
        minValue
        maxValue
        regex
        updatedBy
        createdBy
        labpracticecommandID
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeParameters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteLabPracticeCommand = /* GraphQL */ `
  subscription OnDeleteLabPracticeCommand {
    onDeleteLabPracticeCommand {
      id
      name
      description
      updatedBy
      createdBy
      labpracticeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPractice {
        id
        name
        description
        defaultValue
        minValue
        maxValue
        regex
        updatedBy
        createdBy
        labpracticecommandID
        labpracticeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeParameters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateLabPractice = /* GraphQL */ `
  subscription OnCreateLabPractice {
    onCreateLabPractice {
      id
      name
      description
      duration
      updatedBy
      createdBy
      laboratoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeOutputs {
        nextToken
        startedAt
      }
      LabPracticeSessions {
        nextToken
        startedAt
      }
      LabPracticeDevice {
        id
        name
        description
        type
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeParameters {
        nextToken
        startedAt
      }
      LabPracticeCommands {
        nextToken
        startedAt
      }
      Laboratory {
        id
        name
        description
        updatedBy
        createdBy
        organizatioID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLabPractice = /* GraphQL */ `
  subscription OnUpdateLabPractice {
    onUpdateLabPractice {
      id
      name
      description
      duration
      updatedBy
      createdBy
      laboratoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeOutputs {
        nextToken
        startedAt
      }
      LabPracticeSessions {
        nextToken
        startedAt
      }
      LabPracticeDevice {
        id
        name
        description
        type
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeParameters {
        nextToken
        startedAt
      }
      LabPracticeCommands {
        nextToken
        startedAt
      }
      Laboratory {
        id
        name
        description
        updatedBy
        createdBy
        organizatioID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLabPractice = /* GraphQL */ `
  subscription OnDeleteLabPractice {
    onDeleteLabPractice {
      id
      name
      description
      duration
      updatedBy
      createdBy
      laboratoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LabPracticeOutputs {
        nextToken
        startedAt
      }
      LabPracticeSessions {
        nextToken
        startedAt
      }
      LabPracticeDevice {
        id
        name
        description
        type
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabPracticeParameters {
        nextToken
        startedAt
      }
      LabPracticeCommands {
        nextToken
        startedAt
      }
      Laboratory {
        id
        name
        description
        updatedBy
        createdBy
        organizatioID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLabSemester = /* GraphQL */ `
  subscription OnCreateLabSemester {
    onCreateLabSemester {
      id
      semesterName
      description
      emailUserList
      updatedBy
      createdBy
      laboratoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Laboratory {
        id
        name
        description
        updatedBy
        createdBy
        organizatioID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateLabSemester = /* GraphQL */ `
  subscription OnUpdateLabSemester {
    onUpdateLabSemester {
      id
      semesterName
      description
      emailUserList
      updatedBy
      createdBy
      laboratoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Laboratory {
        id
        name
        description
        updatedBy
        createdBy
        organizatioID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteLabSemester = /* GraphQL */ `
  subscription OnDeleteLabSemester {
    onDeleteLabSemester {
      id
      semesterName
      description
      emailUserList
      updatedBy
      createdBy
      laboratoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Laboratory {
        id
        name
        description
        updatedBy
        createdBy
        organizatioID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateLaboratory = /* GraphQL */ `
  subscription OnCreateLaboratory {
    onCreateLaboratory {
      id
      name
      description
      updatedBy
      createdBy
      organizatioID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Organization {
        id
        country
        region
        city
        type
        name
        description
        phone
        address
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabSemesters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateLaboratory = /* GraphQL */ `
  subscription OnUpdateLaboratory {
    onUpdateLaboratory {
      id
      name
      description
      updatedBy
      createdBy
      organizatioID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Organization {
        id
        country
        region
        city
        type
        name
        description
        phone
        address
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabSemesters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteLaboratory = /* GraphQL */ `
  subscription OnDeleteLaboratory {
    onDeleteLaboratory {
      id
      name
      description
      updatedBy
      createdBy
      organizatioID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Organization {
        id
        country
        region
        city
        type
        name
        description
        phone
        address
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LabSemesters {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreatePrivilegeRole = /* GraphQL */ `
  subscription OnCreatePrivilegeRole {
    onCreatePrivilegeRole {
      id
      privilegeID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        description
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      privilege {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdatePrivilegeRole = /* GraphQL */ `
  subscription OnUpdatePrivilegeRole {
    onUpdatePrivilegeRole {
      id
      privilegeID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        description
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      privilege {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeletePrivilegeRole = /* GraphQL */ `
  subscription OnDeletePrivilegeRole {
    onDeletePrivilegeRole {
      id
      privilegeID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        description
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      privilege {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateRoleUser = /* GraphQL */ `
  subscription OnCreateRoleUser {
    onCreateRoleUser {
      id
      userID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        description
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateRoleUser = /* GraphQL */ `
  subscription OnUpdateRoleUser {
    onUpdateRoleUser {
      id
      userID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        description
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteRoleUser = /* GraphQL */ `
  subscription OnDeleteRoleUser {
    onDeleteRoleUser {
      id
      userID
      roleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        description
        createdBy
        updatedBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateUserLabSemester = /* GraphQL */ `
  subscription OnCreateUserLabSemester {
    onCreateUserLabSemester {
      id
      userID
      labsemesterID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      labsemester {
        id
        semesterName
        description
        emailUserList
        updatedBy
        createdBy
        laboratoryID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateUserLabSemester = /* GraphQL */ `
  subscription OnUpdateUserLabSemester {
    onUpdateUserLabSemester {
      id
      userID
      labsemesterID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      labsemester {
        id
        semesterName
        description
        emailUserList
        updatedBy
        createdBy
        laboratoryID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteUserLabSemester = /* GraphQL */ `
  subscription OnDeleteUserLabSemester {
    onDeleteUserLabSemester {
      id
      userID
      labsemesterID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        lastNames
        documentIdNumber
        email
        phone
        userName
        s3AvatarPath
        dateOfBirth
        updatedBy
        createdBy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      labsemester {
        id
        semesterName
        description
        emailUserList
        updatedBy
        createdBy
        laboratoryID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
