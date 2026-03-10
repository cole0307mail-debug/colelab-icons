// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SprayOutlinedSvg from '@colelab/icons-svg/es/asn/SprayOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SprayOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SprayOutlinedSvg }, slots);
  },
});
