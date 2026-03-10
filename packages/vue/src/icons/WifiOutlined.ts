// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WifiOutlinedSvg from '@colelab/icons-svg/es/asn/WifiOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WifiOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WifiOutlinedSvg }, slots);
  },
});
