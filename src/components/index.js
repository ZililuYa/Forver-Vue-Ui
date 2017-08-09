import config from '../../package.json'
console.log('\n %c Forver ' + (config.version ? config.version : '') + ' %c https://github.com/nesfe/forver \n\n', 'color: #fff; background: #8dc63f; padding:5px 0;', 'background: #d0d0d0; padding:5px 0;')
import directive from '../assets/js/directive'
import Panels from './Panel/index.js'
import Button from './Button/index.js'
import ButtonGroup from './ButtonGroup/index.js'
import ButtonDropdown from './ButtonDropdown/index.js'
import TabPane from './TabPane/index.js'
import Tabs from './Tabs/index.js'
import Accordion from './Accordion/index.js'
import AccordionPanel from './AccordionPanel/index.js'
import Breadcrumb from './Breadcrumb/index.js'
import Blockquote from './Blockquote/index.js'
import Progress from './Progress/index.js'
import Alert from './Alert/index.js'
import Pagination from './Pagination/index.js'
import Label from './Label/index.js'
import Table from './Table/index.js'
import Input from './Input/index.js'
import Checkbox from './Checkbox/index.js'
import CheckboxGroup from './CheckboxGroup/index.js'
import Radio from './Radio/index.js'
import RadioGroup from './RadioGroup/index.js'
import Switch from './Switch/index.js'
import Select from './Select/index.js'
import TagsInput from './TagsInput/index.js'
import Spinner from './Spinner/index.js'
const components = [
  Panels,
  Button,
  ButtonGroup,
  ButtonDropdown,
  Tabs,
  TabPane,
  Accordion,
  AccordionPanel,
  Breadcrumb,
  Blockquote,
  Progress,
  Alert,
  Pagination,
  Label,
  Table,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Select,
  TagsInput,
  Spinner
]

const app = {
  install: function (Vue) {
    components.map(component => {
      Vue.use(component)
    })
    directive.F(Vue)
  }
}

export default app
