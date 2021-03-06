/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const publishMqttMessage = /* GraphQL */ `
  mutation PublishMqttMessage($input: LambdaInput!) {
    publishMqttMessage(input: $input)
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
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
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
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
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
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
export const createPrivilege = /* GraphQL */ `
  mutation CreatePrivilege(
    $input: CreatePrivilegeInput!
    $condition: ModelPrivilegeConditionInput
  ) {
    createPrivilege(input: $input, condition: $condition) {
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
export const updatePrivilege = /* GraphQL */ `
  mutation UpdatePrivilege(
    $input: UpdatePrivilegeInput!
    $condition: ModelPrivilegeConditionInput
  ) {
    updatePrivilege(input: $input, condition: $condition) {
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
export const deletePrivilege = /* GraphQL */ `
  mutation DeletePrivilege(
    $input: DeletePrivilegeInput!
    $condition: ModelPrivilegeConditionInput
  ) {
    deletePrivilege(input: $input, condition: $condition) {
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
export const createUserLabPracticeSession = /* GraphQL */ `
  mutation CreateUserLabPracticeSession(
    $input: CreateUserLabPracticeSessionInput!
    $condition: ModelUserLabPracticeSessionConditionInput
  ) {
    createUserLabPracticeSession(input: $input, condition: $condition) {
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
export const updateUserLabPracticeSession = /* GraphQL */ `
  mutation UpdateUserLabPracticeSession(
    $input: UpdateUserLabPracticeSessionInput!
    $condition: ModelUserLabPracticeSessionConditionInput
  ) {
    updateUserLabPracticeSession(input: $input, condition: $condition) {
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
export const deleteUserLabPracticeSession = /* GraphQL */ `
  mutation DeleteUserLabPracticeSession(
    $input: DeleteUserLabPracticeSessionInput!
    $condition: ModelUserLabPracticeSessionConditionInput
  ) {
    deleteUserLabPracticeSession(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLabPracticeSessionCommand = /* GraphQL */ `
  mutation CreateLabPracticeSessionCommand(
    $input: CreateLabPracticeSessionCommandInput!
    $condition: ModelLabPracticeSessionCommandConditionInput
  ) {
    createLabPracticeSessionCommand(input: $input, condition: $condition) {
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
export const updateLabPracticeSessionCommand = /* GraphQL */ `
  mutation UpdateLabPracticeSessionCommand(
    $input: UpdateLabPracticeSessionCommandInput!
    $condition: ModelLabPracticeSessionCommandConditionInput
  ) {
    updateLabPracticeSessionCommand(input: $input, condition: $condition) {
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
export const deleteLabPracticeSessionCommand = /* GraphQL */ `
  mutation DeleteLabPracticeSessionCommand(
    $input: DeleteLabPracticeSessionCommandInput!
    $condition: ModelLabPracticeSessionCommandConditionInput
  ) {
    deleteLabPracticeSessionCommand(input: $input, condition: $condition) {
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
export const createLabPracticeSessionOutput = /* GraphQL */ `
  mutation CreateLabPracticeSessionOutput(
    $input: CreateLabPracticeSessionOutputInput!
    $condition: ModelLabPracticeSessionOutputConditionInput
  ) {
    createLabPracticeSessionOutput(input: $input, condition: $condition) {
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
export const updateLabPracticeSessionOutput = /* GraphQL */ `
  mutation UpdateLabPracticeSessionOutput(
    $input: UpdateLabPracticeSessionOutputInput!
    $condition: ModelLabPracticeSessionOutputConditionInput
  ) {
    updateLabPracticeSessionOutput(input: $input, condition: $condition) {
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
export const deleteLabPracticeSessionOutput = /* GraphQL */ `
  mutation DeleteLabPracticeSessionOutput(
    $input: DeleteLabPracticeSessionOutputInput!
    $condition: ModelLabPracticeSessionOutputConditionInput
  ) {
    deleteLabPracticeSessionOutput(input: $input, condition: $condition) {
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
export const createLabPracticeOutput = /* GraphQL */ `
  mutation CreateLabPracticeOutput(
    $input: CreateLabPracticeOutputInput!
    $condition: ModelLabPracticeOutputConditionInput
  ) {
    createLabPracticeOutput(input: $input, condition: $condition) {
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
export const updateLabPracticeOutput = /* GraphQL */ `
  mutation UpdateLabPracticeOutput(
    $input: UpdateLabPracticeOutputInput!
    $condition: ModelLabPracticeOutputConditionInput
  ) {
    updateLabPracticeOutput(input: $input, condition: $condition) {
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
export const deleteLabPracticeOutput = /* GraphQL */ `
  mutation DeleteLabPracticeOutput(
    $input: DeleteLabPracticeOutputInput!
    $condition: ModelLabPracticeOutputConditionInput
  ) {
    deleteLabPracticeOutput(input: $input, condition: $condition) {
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
export const createLabPracticeSession = /* GraphQL */ `
  mutation CreateLabPracticeSession(
    $input: CreateLabPracticeSessionInput!
    $condition: ModelLabPracticeSessionConditionInput
  ) {
    createLabPracticeSession(input: $input, condition: $condition) {
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
export const updateLabPracticeSession = /* GraphQL */ `
  mutation UpdateLabPracticeSession(
    $input: UpdateLabPracticeSessionInput!
    $condition: ModelLabPracticeSessionConditionInput
  ) {
    updateLabPracticeSession(input: $input, condition: $condition) {
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
export const deleteLabPracticeSession = /* GraphQL */ `
  mutation DeleteLabPracticeSession(
    $input: DeleteLabPracticeSessionInput!
    $condition: ModelLabPracticeSessionConditionInput
  ) {
    deleteLabPracticeSession(input: $input, condition: $condition) {
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
export const createLabPracticeDevice = /* GraphQL */ `
  mutation CreateLabPracticeDevice(
    $input: CreateLabPracticeDeviceInput!
    $condition: ModelLabPracticeDeviceConditionInput
  ) {
    createLabPracticeDevice(input: $input, condition: $condition) {
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
export const updateLabPracticeDevice = /* GraphQL */ `
  mutation UpdateLabPracticeDevice(
    $input: UpdateLabPracticeDeviceInput!
    $condition: ModelLabPracticeDeviceConditionInput
  ) {
    updateLabPracticeDevice(input: $input, condition: $condition) {
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
export const deleteLabPracticeDevice = /* GraphQL */ `
  mutation DeleteLabPracticeDevice(
    $input: DeleteLabPracticeDeviceInput!
    $condition: ModelLabPracticeDeviceConditionInput
  ) {
    deleteLabPracticeDevice(input: $input, condition: $condition) {
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
export const createLabPracticeParameter = /* GraphQL */ `
  mutation CreateLabPracticeParameter(
    $input: CreateLabPracticeParameterInput!
    $condition: ModelLabPracticeParameterConditionInput
  ) {
    createLabPracticeParameter(input: $input, condition: $condition) {
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
export const updateLabPracticeParameter = /* GraphQL */ `
  mutation UpdateLabPracticeParameter(
    $input: UpdateLabPracticeParameterInput!
    $condition: ModelLabPracticeParameterConditionInput
  ) {
    updateLabPracticeParameter(input: $input, condition: $condition) {
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
export const deleteLabPracticeParameter = /* GraphQL */ `
  mutation DeleteLabPracticeParameter(
    $input: DeleteLabPracticeParameterInput!
    $condition: ModelLabPracticeParameterConditionInput
  ) {
    deleteLabPracticeParameter(input: $input, condition: $condition) {
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
export const createLabPracticeCommand = /* GraphQL */ `
  mutation CreateLabPracticeCommand(
    $input: CreateLabPracticeCommandInput!
    $condition: ModelLabPracticeCommandConditionInput
  ) {
    createLabPracticeCommand(input: $input, condition: $condition) {
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
export const updateLabPracticeCommand = /* GraphQL */ `
  mutation UpdateLabPracticeCommand(
    $input: UpdateLabPracticeCommandInput!
    $condition: ModelLabPracticeCommandConditionInput
  ) {
    updateLabPracticeCommand(input: $input, condition: $condition) {
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
export const deleteLabPracticeCommand = /* GraphQL */ `
  mutation DeleteLabPracticeCommand(
    $input: DeleteLabPracticeCommandInput!
    $condition: ModelLabPracticeCommandConditionInput
  ) {
    deleteLabPracticeCommand(input: $input, condition: $condition) {
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
export const createLabPractice = /* GraphQL */ `
  mutation CreateLabPractice(
    $input: CreateLabPracticeInput!
    $condition: ModelLabPracticeConditionInput
  ) {
    createLabPractice(input: $input, condition: $condition) {
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
export const updateLabPractice = /* GraphQL */ `
  mutation UpdateLabPractice(
    $input: UpdateLabPracticeInput!
    $condition: ModelLabPracticeConditionInput
  ) {
    updateLabPractice(input: $input, condition: $condition) {
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
export const deleteLabPractice = /* GraphQL */ `
  mutation DeleteLabPractice(
    $input: DeleteLabPracticeInput!
    $condition: ModelLabPracticeConditionInput
  ) {
    deleteLabPractice(input: $input, condition: $condition) {
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
export const createLabSemester = /* GraphQL */ `
  mutation CreateLabSemester(
    $input: CreateLabSemesterInput!
    $condition: ModelLabSemesterConditionInput
  ) {
    createLabSemester(input: $input, condition: $condition) {
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
export const updateLabSemester = /* GraphQL */ `
  mutation UpdateLabSemester(
    $input: UpdateLabSemesterInput!
    $condition: ModelLabSemesterConditionInput
  ) {
    updateLabSemester(input: $input, condition: $condition) {
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
export const deleteLabSemester = /* GraphQL */ `
  mutation DeleteLabSemester(
    $input: DeleteLabSemesterInput!
    $condition: ModelLabSemesterConditionInput
  ) {
    deleteLabSemester(input: $input, condition: $condition) {
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
export const createLaboratory = /* GraphQL */ `
  mutation CreateLaboratory(
    $input: CreateLaboratoryInput!
    $condition: ModelLaboratoryConditionInput
  ) {
    createLaboratory(input: $input, condition: $condition) {
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
export const updateLaboratory = /* GraphQL */ `
  mutation UpdateLaboratory(
    $input: UpdateLaboratoryInput!
    $condition: ModelLaboratoryConditionInput
  ) {
    updateLaboratory(input: $input, condition: $condition) {
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
export const deleteLaboratory = /* GraphQL */ `
  mutation DeleteLaboratory(
    $input: DeleteLaboratoryInput!
    $condition: ModelLaboratoryConditionInput
  ) {
    deleteLaboratory(input: $input, condition: $condition) {
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
export const createPrivilegeRole = /* GraphQL */ `
  mutation CreatePrivilegeRole(
    $input: CreatePrivilegeRoleInput!
    $condition: ModelPrivilegeRoleConditionInput
  ) {
    createPrivilegeRole(input: $input, condition: $condition) {
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
export const updatePrivilegeRole = /* GraphQL */ `
  mutation UpdatePrivilegeRole(
    $input: UpdatePrivilegeRoleInput!
    $condition: ModelPrivilegeRoleConditionInput
  ) {
    updatePrivilegeRole(input: $input, condition: $condition) {
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
export const deletePrivilegeRole = /* GraphQL */ `
  mutation DeletePrivilegeRole(
    $input: DeletePrivilegeRoleInput!
    $condition: ModelPrivilegeRoleConditionInput
  ) {
    deletePrivilegeRole(input: $input, condition: $condition) {
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
export const createRoleUser = /* GraphQL */ `
  mutation CreateRoleUser(
    $input: CreateRoleUserInput!
    $condition: ModelRoleUserConditionInput
  ) {
    createRoleUser(input: $input, condition: $condition) {
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
export const updateRoleUser = /* GraphQL */ `
  mutation UpdateRoleUser(
    $input: UpdateRoleUserInput!
    $condition: ModelRoleUserConditionInput
  ) {
    updateRoleUser(input: $input, condition: $condition) {
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
export const deleteRoleUser = /* GraphQL */ `
  mutation DeleteRoleUser(
    $input: DeleteRoleUserInput!
    $condition: ModelRoleUserConditionInput
  ) {
    deleteRoleUser(input: $input, condition: $condition) {
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
export const createUserLabSemester = /* GraphQL */ `
  mutation CreateUserLabSemester(
    $input: CreateUserLabSemesterInput!
    $condition: ModelUserLabSemesterConditionInput
  ) {
    createUserLabSemester(input: $input, condition: $condition) {
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
export const updateUserLabSemester = /* GraphQL */ `
  mutation UpdateUserLabSemester(
    $input: UpdateUserLabSemesterInput!
    $condition: ModelUserLabSemesterConditionInput
  ) {
    updateUserLabSemester(input: $input, condition: $condition) {
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
export const deleteUserLabSemester = /* GraphQL */ `
  mutation DeleteUserLabSemester(
    $input: DeleteUserLabSemesterInput!
    $condition: ModelUserLabSemesterConditionInput
  ) {
    deleteUserLabSemester(input: $input, condition: $condition) {
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
