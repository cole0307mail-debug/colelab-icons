// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BloodOxygenOutlinedSvg from '@colelab/icons-svg/es/asn/BloodOxygenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BloodOxygenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BloodOxygenOutlinedSvg }, slots);
  },
});
