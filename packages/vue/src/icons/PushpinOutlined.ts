// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PushpinOutlinedSvg from '@colelab/icons-svg/es/asn/PushpinOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PushpinOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PushpinOutlinedSvg }, slots);
  },
});
