// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FormOutlinedSvg from '@colelab/icons-svg/es/asn/FormOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FormOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FormOutlinedSvg }, slots);
  },
});
