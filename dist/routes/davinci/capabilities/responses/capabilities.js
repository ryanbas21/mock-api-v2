"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usernamePassword = exports.capabilitiesSuccess = void 0;
var capabilitiesSuccess = {
    interactionId: '170da545-5d42-48f1-b72d-c0e76253cd54',
    companyId: '02fb4743-189a-4bc7-9d6c-a919edfe6447',
    connectionId: 'c3e6a164bde107954e93f5c09f0c8bce',
    connectorId: 'pingOneAuthenticationConnector',
    id: 'fbx7x6gnus',
    capabilityName: 'returnSuccessResponseRedirect',
    environment: {
        id: '02fb4743-189a-4bc7-9d6c-a919edfe6447',
    },
    session: {
        id: 'f0524100-0609-4e5d-9647-f75fb54927b1',
    },
    status: 'COMPLETED',
    authorizeResponse: {
        code: '177fbb2a-5a28-4bd6-ad16-e92dd3ac43a3',
        state: 'MTU2ODM2MjEwODkyMjgxMzgxMzIyNDE2MjEyMjIyOTI0MTAzMTU0MTgy',
    },
    isResponseCompatibleWithMobileAndWebSdks: true,
    success: true,
    resetCookie: true,
    interactionToken: '3e92be46cd6cce7388a7062383fd06bad3940011c081c6618458048280b4780b51763bf22448d962fb0d678e4d63f3ccb68bd14dd8727ea0e826a797c5e7ac94814230832a92e2d9977120a3fd512b5bfb26b9f562e8f2b1fed20911ebf340164e20595f56b359cc89fd8da4445523b050246badfe3b89e2d662a8cce033a587',
    subFlowSettings: {
        reactSkUrl: 'https://assets.pingone.ca/davinci/latest/davinci.js',
        cssUrl: null,
        cssLinks: [],
        jsLinks: [],
        loadingScreenSettings: '{}',
    },
};
exports.capabilitiesSuccess = capabilitiesSuccess;
var usernamePassword = {
    interactionId: '178feb6d-7935-4e05-9cb1-3215e947a372',
    interactionToken: 'b96e09e01e80415fa632a1a97eb9bfa6365997213ec87756a73d2fcf5c8fb59301ecfe08ef7e6417ea62fdc22d77507db4f437c45500caba6ae42fa7cd0a5a05359be1b6f2dc179b3247578f2e5ce0e61876300728cd4fc4064e6b2fbe2e3bd1398a357817457f09c48fedaece73b846392e6d780c096d082feb8986fe330e19',
    _links: {
        next: {
            href: 'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/davinci/connections/867ed4363b2bc21c860085ad2baa817d/capabilities/customHTMLTemplate',
        },
    },
    eventName: 'continue',
    isResponseCompatibleWithMobileAndWebSdks: true,
    id: 'cq77vwelou',
    companyId: '02fb4743-189a-4bc7-9d6c-a919edfe6447',
    flowId: 'f17221dd5a67fef0382db1e77791d436',
    connectionId: '867ed4363b2bc21c860085ad2baa817d',
    capabilityName: 'customHTMLTemplate',
    formData: {
        value: {
            username: '',
            password: '',
        },
    },
    form: {
        name: 'Username/Password Form',
        description: '',
        category: 'CUSTOM_HTML',
        components: {
            fields: [
                {
                    type: 'TEXT',
                    key: 'username',
                    label: 'Username',
                },
                {
                    type: 'PASSWORD',
                    key: 'password',
                    label: 'Password',
                },
                {
                    type: 'SUBMIT_BUTTON',
                    key: 'SIGNON',
                    label: 'Sign On',
                },
                {
                    type: 'FLOW_BUTTON',
                    key: 'TROUBLE',
                    label: 'Having trouble signing on?',
                },
                {
                    type: 'FLOW_BUTTON',
                    key: 'REGISTER',
                    label: 'No account? Register now!',
                },
            ],
        },
    },
};
exports.usernamePassword = usernamePassword;
