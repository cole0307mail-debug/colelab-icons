// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ReloadOutlinedSvg from '@colelab/icons-svg/es/asn/ReloadOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ReloadOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ReloadOutlinedSvg }, slots);
  },
});
