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

This repository is used in the [Contact Us tutorial](https://documentation.platformos.com/get-started/contact-us-tutorial) on the official platformOS documentation site.

Because the tutorial is written step by step, we provide **checkpoints** as Git tags. Each checkpoint matches the exact state of the codebase at the end of a chapter. This way you can check out only the part of the code that is relevant to the chapter you are following, without being confused by later changes.

### Available checkpoints

* `checkpoint-defining-email` — matches the result of [Defining the email](https://documentation.platformos.com/get-started/contact-us-tutorial/defining-the-email) chapter
* `checkpoint-testing` — matches the result of [Testing](https://documentation.platformos.com/get-started/contact-us-tutorial/testing-contact-create-command) the contact create command chapter
* `checkpoint-common-styling` - matches the result of [Styling the Form](https://documentation.platformos.com/get-started/contact-us-tutorial/using-common-styling) chapter

### How to use a checkpoint

1. Clone this repository (if you haven’t already):

   ```bash
   git clone https://github.com/Platform-OS/tutorials-contact-us.git
   cd tutorials-contact-us
   ```

2. Make sure you have all tags:

   ```bash
   git fetch --tags
   ```

3. Check out the tag that matches the chapter you are following, for example:

   ```bash
   git checkout tags/checkpoint-testing
   ```

This puts your repository into the exact state of the code as it is shown in the documentation chapter.
You’ll be in a **detached HEAD** state, which is normal for tags. If you want to experiment and make edits, create a branch from that state:

```bash
git switch -c my-experiments
```

To return to the latest version of the code on `main`:

```bash
git checkout main
git pull
```

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
