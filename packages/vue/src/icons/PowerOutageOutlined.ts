// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PowerOutageOutlinedSvg from '@colelab/icons-svg/es/asn/PowerOutageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PowerOutageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PowerOutageOutlinedSvg }, slots);
  },
});
