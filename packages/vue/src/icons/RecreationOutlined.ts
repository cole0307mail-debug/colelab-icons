// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RecreationOutlinedSvg from '@colelab/icons-svg/es/asn/RecreationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RecreationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RecreationOutlinedSvg }, slots);
  },
});
