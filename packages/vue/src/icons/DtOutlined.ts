// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DtOutlinedSvg from '@colelab/icons-svg/es/asn/DtOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DtOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DtOutlinedSvg }, slots);
  },
});
