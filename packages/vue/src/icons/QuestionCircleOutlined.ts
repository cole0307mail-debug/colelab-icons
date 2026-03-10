// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import QuestionCircleOutlinedSvg from '@colelab/icons-svg/es/asn/QuestionCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'QuestionCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: QuestionCircleOutlinedSvg }, slots);
  },
});
