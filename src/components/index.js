import config from '../../package.json'
console.log('\n %c Forver ' + (config.version ? config.version : '') + ' %c https://github.com/nesfe/forver \n\n', 'color: #fff; background: #8dc63f; padding:5px 0;', 'background: #d0d0d0; padding:5px 0;')
import directive from '../assets/js/directive'
import lib from '../assets/js/lib'
import overall from '../assets/js/overall'
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
import MultiSelect from './MultiSelect/index.js'
import Form from './Form/index.js'
import FormGroup from './FormGroup/index.js'
import Textarea from './Textarea/index.js'
import InputGroup from './InputGroup/index.js'
import InputGroupBtn from './InputGroupBtn/index.js'
import InputGroupAddon from './InputGroupAddon/index.js'
const components = [
  InputGroup,
  InputGroupBtn,
  InputGroupAddon,
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
  Textarea,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Select,
  TagsInput,
  Spinner,
  MultiSelect,
  Form,
  FormGroup
]

const app = {
  install: function (Vue) {
    components.map(component => {
      Vue.use(component)
    })
    lib.F(Vue)
    directive.F(Vue)
    overall.F(Vue)
  }
}

export default app
