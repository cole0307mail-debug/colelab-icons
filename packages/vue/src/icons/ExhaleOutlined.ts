// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ExhaleOutlinedSvg from '@colelab/icons-svg/es/asn/ExhaleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ExhaleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ExhaleOutlinedSvg }, slots);
  },
});
