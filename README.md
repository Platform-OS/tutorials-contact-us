# platformOS Example _Contact Us_ Form

This repository contains the final code for the Contact Us form tutorial on platformOS. This tutorial is designed to help you build a comprehensive Contact Us form, leveraging various platformOS features such as Commands, Validators, Events, data display, and logging.

The full tutorial is available [on the platformOS documentation site](https://documentation.platformos.com/get-started/contact-us-tutorial/).

## Setup

To deploy the code to your own instance, follow these steps:

1. [Sign up on the Partner Portal](https://documentation.platformos.com/get-started/installation-and-configuration/#sign-up-on-the-partner-portal)
2. [Create an instance](https://documentation.platformos.com/get-started/installation-and-configuration/#create-an-instance)
3. [Install pos-cli](https://documentation.platformos.com/get-started/installation-and-configuration/#install-pos-cli)

Ensure you have `pos-cli` installed globally. If not, you can install it using npm:

```bash
npm install -g @platformos/pos-cli
```

4. [Authenticate your environment](https://documentation.platformos.com/get-started/working-with-the-code-and-files/#authenticate-your-environment)

```bash
pos-cli env add --url https://YOUR-INSTANCE.staging.oregon.platform-os.com staging
```

5. [Deploy the code](https://documentation.platformos.com/get-started/working-with-the-code-and-files/#upload-your-code-to-an-instance)

Deploy the code to your instance:

```bash
pos-cli deploy staging
```

Or sync your changes:

```bash
pos-cli sync staging
```

## Using the Tutorial

Follow the step-by-step guide in the [official documentation](https://documentation.platformos.com/get-started/contact-us-tutorial/) to understand how to implement each part of the Contact Us form. When in doubt, check the source code.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
