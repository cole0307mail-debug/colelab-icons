// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import QuestionOutlinedSvg from '@colelab/icons-svg/es/asn/QuestionOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'QuestionOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: QuestionOutlinedSvg }, slots);
  },
});
