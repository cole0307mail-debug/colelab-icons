// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ManualOutlinedSvg from '@colelab/icons-svg/es/asn/ManualOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ManualOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ManualOutlinedSvg }, slots);
  },
});
