// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TyphoonOutlinedSvg from '@colelab/icons-svg/es/asn/TyphoonOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TyphoonOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TyphoonOutlinedSvg }, slots);
  },
});
