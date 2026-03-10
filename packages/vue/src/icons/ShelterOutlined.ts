// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShelterOutlinedSvg from '@colelab/icons-svg/es/asn/ShelterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShelterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShelterOutlinedSvg }, slots);
  },
});
