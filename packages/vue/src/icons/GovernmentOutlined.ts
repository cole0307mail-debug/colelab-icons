// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GovernmentOutlinedSvg from '@colelab/icons-svg/es/asn/GovernmentOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GovernmentOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GovernmentOutlinedSvg }, slots);
  },
});
