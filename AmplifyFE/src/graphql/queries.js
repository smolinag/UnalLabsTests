/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
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
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRoles = /* GraphQL */ `
  query SyncRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPrivilege = /* GraphQL */ `
  query GetPrivilege($id: ID!) {
    getPrivilege(id: $id) {
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
export const listPrivileges = /* GraphQL */ `
  query ListPrivileges(
    $filter: ModelPrivilegeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivileges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivileges = /* GraphQL */ `
  query SyncPrivileges(
    $filter: ModelPrivilegeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivileges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserLabPracticeSession = /* GraphQL */ `
  query GetUserLabPracticeSession($id: ID!) {
    getUserLabPracticeSession(id: $id) {
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
export const listUserLabPracticeSessions = /* GraphQL */ `
  query ListUserLabPracticeSessions(
    $filter: ModelUserLabPracticeSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLabPracticeSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserLabPracticeSessions = /* GraphQL */ `
  query SyncUserLabPracticeSessions(
    $filter: ModelUserLabPracticeSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserLabPracticeSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPracticeSessionCommand = /* GraphQL */ `
  query GetLabPracticeSessionCommand($id: ID!) {
    getLabPracticeSessionCommand(id: $id) {
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
export const listLabPracticeSessionCommands = /* GraphQL */ `
  query ListLabPracticeSessionCommands(
    $filter: ModelLabPracticeSessionCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPracticeSessionCommands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabPracticeSessionCommands = /* GraphQL */ `
  query SyncLabPracticeSessionCommands(
    $filter: ModelLabPracticeSessionCommandFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPracticeSessionCommands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPracticeSessionOutput = /* GraphQL */ `
  query GetLabPracticeSessionOutput($id: ID!) {
    getLabPracticeSessionOutput(id: $id) {
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
export const listLabPracticeSessionOutputs = /* GraphQL */ `
  query ListLabPracticeSessionOutputs(
    $filter: ModelLabPracticeSessionOutputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPracticeSessionOutputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabPracticeSessionOutputs = /* GraphQL */ `
  query SyncLabPracticeSessionOutputs(
    $filter: ModelLabPracticeSessionOutputFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPracticeSessionOutputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPracticeOutput = /* GraphQL */ `
  query GetLabPracticeOutput($id: ID!) {
    getLabPracticeOutput(id: $id) {
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
export const listLabPracticeOutputs = /* GraphQL */ `
  query ListLabPracticeOutputs(
    $filter: ModelLabPracticeOutputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPracticeOutputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabPracticeOutputs = /* GraphQL */ `
  query SyncLabPracticeOutputs(
    $filter: ModelLabPracticeOutputFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPracticeOutputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPracticeSession = /* GraphQL */ `
  query GetLabPracticeSession($id: ID!) {
    getLabPracticeSession(id: $id) {
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
export const listLabPracticeSessions = /* GraphQL */ `
  query ListLabPracticeSessions(
    $filter: ModelLabPracticeSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPracticeSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabPracticeSessions = /* GraphQL */ `
  query SyncLabPracticeSessions(
    $filter: ModelLabPracticeSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPracticeSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPracticeDevice = /* GraphQL */ `
  query GetLabPracticeDevice($id: ID!) {
    getLabPracticeDevice(id: $id) {
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
export const listLabPracticeDevices = /* GraphQL */ `
  query ListLabPracticeDevices(
    $filter: ModelLabPracticeDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPracticeDevices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabPracticeDevices = /* GraphQL */ `
  query SyncLabPracticeDevices(
    $filter: ModelLabPracticeDeviceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPracticeDevices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPracticeParameter = /* GraphQL */ `
  query GetLabPracticeParameter($id: ID!) {
    getLabPracticeParameter(id: $id) {
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
export const listLabPracticeParameters = /* GraphQL */ `
  query ListLabPracticeParameters(
    $filter: ModelLabPracticeParameterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPracticeParameters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabPracticeParameters = /* GraphQL */ `
  query SyncLabPracticeParameters(
    $filter: ModelLabPracticeParameterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPracticeParameters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPracticeCommand = /* GraphQL */ `
  query GetLabPracticeCommand($id: ID!) {
    getLabPracticeCommand(id: $id) {
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
export const listLabPracticeCommands = /* GraphQL */ `
  query ListLabPracticeCommands(
    $filter: ModelLabPracticeCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPracticeCommands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabPracticeCommands = /* GraphQL */ `
  query SyncLabPracticeCommands(
    $filter: ModelLabPracticeCommandFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPracticeCommands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabPractice = /* GraphQL */ `
  query GetLabPractice($id: ID!) {
    getLabPractice(id: $id) {
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
export const listLabPractices = /* GraphQL */ `
  query ListLabPractices(
    $filter: ModelLabPracticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabPractices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLabPractices = /* GraphQL */ `
  query SyncLabPractices(
    $filter: ModelLabPracticeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabPractices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getLabSemester = /* GraphQL */ `
  query GetLabSemester($id: ID!) {
    getLabSemester(id: $id) {
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
export const listLabSemesters = /* GraphQL */ `
  query ListLabSemesters(
    $filter: ModelLabSemesterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabSemesters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabSemesters = /* GraphQL */ `
  query SyncLabSemesters(
    $filter: ModelLabSemesterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabSemesters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLaboratory = /* GraphQL */ `
  query GetLaboratory($id: ID!) {
    getLaboratory(id: $id) {
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
export const listLaboratorys = /* GraphQL */ `
  query ListLaboratorys(
    $filter: ModelLaboratoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLaboratorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLaboratories = /* GraphQL */ `
  query SyncLaboratories(
    $filter: ModelLaboratoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLaboratories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPrivilegeRoles = /* GraphQL */ `
  query SyncPrivilegeRoles(
    $filter: ModelPrivilegeRoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivilegeRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        privilegeID
        roleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRoleUsers = /* GraphQL */ `
  query SyncRoleUsers(
    $filter: ModelRoleUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoleUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        roleID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserLabSemesters = /* GraphQL */ `
  query SyncUserLabSemesters(
    $filter: ModelUserLabSemesterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserLabSemesters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        labsemesterID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
