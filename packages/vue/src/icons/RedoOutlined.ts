// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RedoOutlinedSvg from '@colelab/icons-svg/es/asn/RedoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RedoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RedoOutlinedSvg }, slots);
  },
});
