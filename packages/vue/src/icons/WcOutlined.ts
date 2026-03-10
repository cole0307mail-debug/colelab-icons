// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WcOutlinedSvg from '@colelab/icons-svg/es/asn/WcOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WcOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WcOutlinedSvg }, slots);
  },
});
