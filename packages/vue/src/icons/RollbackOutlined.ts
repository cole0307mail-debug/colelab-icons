// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RollbackOutlinedSvg from '@colelab/icons-svg/es/asn/RollbackOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RollbackOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RollbackOutlinedSvg }, slots);
  },
});
