![](https://img.shields.io/github/package-json/v/kaskadi/set-klima-stocks)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/set-klima-stocks?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/set-klima-stocks/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/set-klima-stocks/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/set-klima-stocks/build?label=build&logo=mocha)](https://github.com/kaskadi/set-klima-stocks/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/set-klima-stocks/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/set-klima-stocks/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/set-klima-stocks?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/set-klima-stocks)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/set-klima-stocks?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/set-klima-stocks)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/set-klima-stocks?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/set-klima-stocks)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/set-klima-stocks?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/set-klima-stocks/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# Resources documentation

The following lambda functions are defined in this repository:
- [set-klima-stocks](#set-klima-stocks)

The following layers are defined in this repository:
- [set-klima-stocks-layer](#set-klima-stocks-layer)

## set-klima-stocks <a name="set-klima-stocks"></a>

|       Name       | Sources                        | Timeout |              Handler             | Layers                                                              |
| :--------------: | :----------------------------- | :-----: | :------------------------------: | :------------------------------------------------------------------ |
| set-klima-stocks | <ul><li>Event Bridge</li></ul> | default | [handler](./set-klima-stocks.js) | <ul><li>[set-klima-stocks-layer](#set-klima-stocks-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## set-klima-stocks-layer <a name="set-klima-stocks-layer"></a>

### Description

Layer for set-klima-stocks

### Dependencies

- `aws-es-client`, version: `^1.0.1` ([see on NPM](https://www.npmjs.com/package/aws-es-client))

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value            |
| :----------- | :--------------- |
| app          | kaskadi          |
| service      | set-klima-stocks |
| logical-unit | stocks           |
| type         | eventBridge      |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->