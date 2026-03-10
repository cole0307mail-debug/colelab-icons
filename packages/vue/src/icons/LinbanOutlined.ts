// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LinbanOutlinedSvg from '@colelab/icons-svg/es/asn/LinbanOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LinbanOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LinbanOutlinedSvg }, slots);
  },
});
