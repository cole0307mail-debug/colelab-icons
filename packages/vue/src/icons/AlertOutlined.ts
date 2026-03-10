// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlertOutlinedSvg from '@colelab/icons-svg/es/asn/AlertOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlertOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlertOutlinedSvg }, slots);
  },
});
