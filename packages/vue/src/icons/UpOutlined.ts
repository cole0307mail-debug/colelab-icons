// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UpOutlinedSvg from '@colelab/icons-svg/es/asn/UpOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UpOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UpOutlinedSvg }, slots);
  },
});
