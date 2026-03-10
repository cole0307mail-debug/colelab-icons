// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RestoreOutlinedSvg from '@colelab/icons-svg/es/asn/RestoreOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RestoreOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RestoreOutlinedSvg }, slots);
  },
});
